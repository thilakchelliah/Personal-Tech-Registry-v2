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
  @ViewChild(TaggerComponent, { static: false }) tagger: TaggerComponent;
  constructor(private blogManagerService: BlogManagerService, private bmc: BlogManagerComponent) { }

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
  updateTaggerArray(tagArray: any) {
    this.tagArray = tagArray;
  }
  addOrUpdatePost(event: any) {
    var tokenObj: any = localStorage.getItem('currentUser');
    var content = $("#summernote").summernote('code');
    var blogPicSrc = $("#blogPic").attr("src");
    var data = {
      title: this.title,
      htmlContent: content,
      userId: tokenObj.userId,
      tagData: this.tagger.tagArray().join(','),
      previewText: this.previewText,
      blogPic: blogPicSrc
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
        $('#summernote').summernote('reset');
      },
      err => {

        saveDialog.find('.bootbox-body').html('Error Happened');

      }
    );
  };
  //Image uploader function 
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    var img = new Image();
    reader.addEventListener('load', (event: any) => {
      img.onload = function () {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");

        if (img.height > 700) {
          canvas.width = img.width / 10;
          canvas.height = img.height / 10;
        } else {
          canvas.width = img.width;
          canvas.height = img.height;
        }
        context.drawImage(img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        );

        $("#blogPic").attr("src", canvas.toDataURL());
      }
      img.src = event.target.result;



    });
    reader.readAsDataURL(file);
  }
  uploadImage() {
    $("input[id='my_file']").click();
  }

}
