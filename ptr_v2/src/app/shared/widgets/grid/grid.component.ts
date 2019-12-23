import { Component, OnInit, Input } from '@angular/core';
import { ApiCallerService } from '../../service/api-caller.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from 'src/app/model/user';
import { stringify } from '@angular/compiler/src/util';



@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

    @Input() gdId: string;
    @Input() gridData: string;
    @Input() gdType: string;
    @Input() coloumnData: string;
    @Input() ver: string;
    tbodyContent: string;
    globalColData: any = {
        userGrid: [{ 'title': 'User Name', 'data': 'username' }, { 'title': 'Email', 'data': 'email' }],
        blogGrid: [{ 'title': 'Post Title', 'data': 'title' }, { 'title': 'Preview', 'data': 'previewText' }, { 'title': 'Related Tags', 'data': 'tagData' },
        {
            'title': 'Preview',
            'data': 'urlId',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;blogGridPreview&quot;,&quot;' + data + '&quot;)">Preview</Button>';
            }
        },
        {
            'title': 'Delete',
            'data': '_id',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;blogRowDelete&quot;,&quot;' + data + '&quot;)">Delete</Button>';
            }
        }
        ],
        tutorialGrid: [{ 'title': 'Tutorial Title', 'data': 'title' }, { 'title': 'Tutorial Link', 'data': 'tutorialLink' },
        { 'title': 'URL ID', 'data': 'urlFriendlyTitle' },
        { 'title': 'Tags', 'data': 'tags' },
        {
            'title': 'Preview',
            'data': 'urlFriendlyTitle',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;tutorialGridPreview&quot;,&quot;' + data + '&quot;)">Preview</Button>';
            }
        },
        {
            'title': 'Delete',
            'data': '_id',
            "render": function (data, type, row, meta) {
                return '<button ng-click="buttonEvent(&quot;tutorialRowDelete&quot;,&quot;' + data + '&quot;)">Delete</Button>';
            }
        }
        ]
    };

    constructor(private apiCallerService: ApiCallerService) { }

    ngOnInit() {
        this.apiCallerService.callGetUrlTofetch(this.gridData).subscribe((res) => {
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
                    console.log();
                    htmlOutput += "<td>" + m[t.data] + "</td>";
                });
                htmlOutput += "</tr>";
            });
            this.tbodyContent = htmlOutput;

        },
            (error) => {
                console.log(error);
            }
        );

    }
    ngAfterViewInit(): void {

    }

    ngOnDestroy(): void {

    }


    refreshGrid(){
        this.ngOnInit();
    }


}

