import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BlogManagerService } from '../../service/blog-manager.service'
import { TaggerComponent } from '../../../shared/widgets/tagger/tagger.component'
import { BlogManagerComponent } from '../blog-manager/blog-manager.component'
declare var $: any;
declare var bootbox: any;

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  @Input() functionType: string;
  @Input() postId: string;
  tagArray = [];
  buttonText: string;
  title = "";
  previewText = "";
  @ViewChild(TaggerComponent, {static: false}) tagger: TaggerComponent;
  constructor(private blogManagerService: BlogManagerService,private bmc: BlogManagerComponent) { }

  ngOnInit() {
    this.buttonText = this.functionType === "add" ? "Add New " : "Update ";
    $(document).ready(function () {
      $('#summernote').summernote({
        dialogsInBody: true,
        height: 300,
        fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Abel'],
        fontNamesIgnoreCheck: ['Abel']
      });
    });
  }
  addOrUpdatePost(event: any) {
    var tokenObj: any = localStorage.getItem('currentUser');
    var content = $("#summernote").summernote('code');
    var data = {
      title: this.title,
      htmlContent: content,
      userId: tokenObj.userId,
      tagData: this.tagArray.join(','),
      previewText: this.previewText
    };
    var saveDialog = bootbox.dialog({
      title: 'Please Wait!',
      message: '<p><i class="fa fa-spin fa-spinner"></i> processing...</p>',
      closeButton: false,
      buttons: {
        ok: {
          label: "Ok",
          className: 'btn-info',
          callback: function () {
            $('#summernote').summernote('reset');
          }
        }
      }
    });
    this.blogManagerService.CreateBlogPost(data).subscribe(
      response => {
        saveDialog.find('.bootbox-body').html('Blog Successfully Created/Updated');
        this.title = "";
        this.previewText = "";
        this.tagger.deleteAllTags();
        this.bmc.refreshGrid();
        //var dtable = $("#blogGrid").DataTable();
        // sharedService.callGetUrlTofetch('/apiS/Blog/FetchAll').then(function (resp) {
        //   dtable.clear();
        //   dtable.rows.add(resp.data);
        //   dtable.draw();
        // });

      },
      err => {

        saveDialog.find('.bootbox-body').html('Error Happened');

      }
    );
  };
}
