import {
    Component, OnInit, Input, ElementRef,
    ChangeDetectorRef,
    ComponentFactoryResolver,
    ViewContainerRef,
    ViewChild,
    ViewEncapsulation,
    ComponentRef
} from '@angular/core';
import { ApiCallerService } from '../../service/api-caller.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { stringify } from '@angular/compiler/src/util';
import { BlogPostFullComponent } from '../../widgets/blog-post-full/blog-post-full.component'
declare var $: any;
declare var bootbox: any;



@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {

    @Input() gdId: string;
    @Input() gridData: string;
    @Input() gdType: string;
    @Input() coloumnData: string;
    @Input() ver: string;

    @ViewChild('placeholder', { read: ViewContainerRef, static: false }) vref: ViewContainerRef;
    tbodyContent: string;
    showOrHideLoader: string;
    modalShowOrHide: string;
    compRef: any;
    globalColData: any = {
        userGrid: [{ 'title': 'User Name', 'data': 'username' }, { 'title': 'Email', 'data': 'email' }],
        blogGrid: [
            { 'title': 'Title', 'data': 'title' },
            {
                'title': 'Picture', 'data': 'blogPic',
                "render": function (data, row) {
                    return '<img src="' + row[data] + '" width="170" height="150">';
                }
            },
            { 'title': 'Preview', 'data': 'previewText' },
            { 'title': 'Tags', 'data': 'tagData' },
            {
                'title': 'Preview',
                'data': 'urlId',
                "render": function (data, row) {
                    return '<button class="gridButtonDyn" clickEvent="blogGridPreview,' + row[data] + '">Preview</Button>';
                }
            },
            {
                'title': 'Delete',
                'data': '_id',
                "render": function (data, row) {
                    return '<button class="gridButtonDyn" clickEvent="blogRowDelete,' + row[data] + '">Delete</Button>';
                }
            }
        ],
        tutorialGrid: [{ 'title': 'Tutorial Title', 'data': 'title' }, { 'title': 'Tutorial Link', 'data': 'tutorialLink' },
        { 'title': 'URL ID', 'data': 'urlFriendlyTitle' },
        { 'title': 'Tags', 'data': 'tags' },
        {
            'title': 'Preview',
            'data': 'urlFriendlyTitle',
            "render": function (data, row) {
                return '<button class="gridButtonDyn" clickEvent="tutorialGridPreview,' + row[data] + '">Preview</Button>';
            }
        },
        {
            'title': 'Delete',
            'data': '_id',
            "render": function (data, row) {
                return '<button  class="gridButtonDyn" clickEvent="tutorialRowDelete,' + row[data] + '">Delete</Button>';
            }
        }
        ]
    };

    constructor(private apiCallerService: ApiCallerService,
        private elRef: ElementRef,
        private chRef: ChangeDetectorRef,
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef) { }
    //Life cycle hooks
    ngOnInit() {


        this.GridPopulateAndRefresh();
        this.showOrHideLoader = "none";
    }
    ngAfterViewInit(): void {

        //Add event handler each.

    }

    ngOnDestroy(): void {

    }

    //Other method
    GridPopulateAndRefresh() {
      
        var gridId: string = this.apiCallerService.uuidv4();
        this.apiCallerService.commonGetforOpenApi(this.gridData).subscribe((res) => {
            console.log(res);
            var userList = res as Array<any>;
            var htmlOutput = "";
            htmlOutput += "<thead><tr>";
            this.globalColData[this.coloumnData].forEach(v => {
                console.log();

                htmlOutput += "<th>" + v.title + "</th>";
            });
            htmlOutput += "</tr></thead>";
            userList.forEach(m => {

                htmlOutput += "<tr>";
                this.globalColData[this.coloumnData].forEach(t => {
                    if (t.render != undefined) {
                        var curString = t.render(t.data, m);
                        htmlOutput += "<td>" + curString + "</td>";
                    }
                    else {
                        htmlOutput += "<td>" + m[t.data] + "</td>";
                    }
                });
                htmlOutput += "</tr>";
            });
            this.tbodyContent = htmlOutput;
            this.chRef.detectChanges();

            let elementList: Element[] = this.elRef.nativeElement.querySelectorAll(".gridButtonDyn");
            elementList.forEach(t => {
                var parameters = t.getAttribute("clickEvent").split(",");
                t.addEventListener('click', this.buttonEvent.bind(this, parameters[0], parameters[1]));
            });
            this.showOrHideLoader = "none";
        },
            (error) => {
                this.showOrHideLoader = "none";
                console.log(error);
            }
        );

    }
    buttonEvent(eventFor: string, Id: string) {
        this.showOrHideLoader = "block";

        this.chRef.detectChanges();
        switch (eventFor) {
            case "blogGridPreview":


                this.showOrHideLoader = "none";
                const componentFactory = this.componentFactoryResolver.resolveComponentFactory(BlogPostFullComponent);
                this.compRef = this.vref.createComponent(componentFactory, 0);
                this.compRef.instance.urlId = Id;
                $('#gridModal').modal('show');

                break;

            case "blogRowDelete":
                this.apiCallerService.deleteBlogRow({ id: Id }).subscribe(
                    resp => {

                        this.GridPopulateAndRefresh();
                        this.showOrHideLoader = "none";
                    },
                    err => {
                        alert(err);
                        this.showOrHideLoader = "none";
                    }
                );
                break;
            case "tutorialGridPreview":
                //    <blog-post-full url-id="' + data + '"></blog-post-full>
                // var procDialog = bootbox.dialog({
                //     title: 'Blog Preview',
                //     message: $(clonedElement),
                //     closeButton: false,
                //     className: 'ModalPreviewCls',
                //     buttons: {
                //         ok: {
                //             label: "Ok",
                //             className: 'btn-info',
                //             callback: function () {
                //                 procDialog.modal('hide');
                //             }
                //         }
                //     }
                // });
                this.showOrHideLoader = "none";

                break;
            case "tutorialRowDelete":
                this.apiCallerService.deleteTutorialRow({ id: Id }).subscribe(
                    res => {
                        this.GridPopulateAndRefresh();
                        this.showOrHideLoader = "none";
                    },
                    err => {
                        alert(err);
                        this.showOrHideLoader = "none";
                    }

                );
                break;
        }

    }
    destroyModal() {
        this.compRef.destroy()
    }
    refreshGrid(url: string, colData: string) {
        this.showOrHideLoader = "block";
        this.tbodyContent="";
        this.chRef.detectChanges();
        this.gridData = url;
        this.coloumnData = colData;
        this.GridPopulateAndRefresh();
       
    }


}

