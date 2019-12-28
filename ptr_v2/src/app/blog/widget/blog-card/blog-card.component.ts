import { Component, OnInit } from '@angular/core';
import { ApiCallerService } from '../../../shared/service/api-caller.service'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as moment from 'moment';
declare var $: any;

var blogObject = function (title, previewText, User, createdDate, urlId, tagData) {
  return {
    title: title,
    previewText: previewText,
    user: User[0].username,
    date: createdDate,
    urlId: urlId,
    tagData: tagData.split(",")
  };
};

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})


export class BlogCardComponent implements OnInit {

  blogCardList: any = [];
  constructor(private apiCallerService: ApiCallerService, protected sanitizer: DomSanitizer) { }
  ngOnInit() {
    var curObj = this;
    this.apiCallerService.commonGetforOpenApi("/api/blog/fetchall/").subscribe(
      (res) => {
        console.log(res);
        $(res).each(function () {
          curObj.blogCardList.push({
            blgImgSrc: this.blgImgSrc == "" || this.blgImgSrc == undefined ? "/assets/images/default-image.jpg" : this.blgImgSrc,
            title: this.title,
            blogPic: curObj.sanitizer.bypassSecurityTrustUrl(this.blogPic),
            createdDate: moment(this.createdDate, moment.ISO_8601).format('MM/DD/YYYY'),
            previewText: this.previewText,
            user: this.username,
            date: this.createdDate,
            urlId: this.urlId,
            tagData: this.tagData.split(",")
          });
        });
      },
      (err) => {
       alert(err);
      })

  }

}
