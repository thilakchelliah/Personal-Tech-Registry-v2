import { Component, OnInit } from '@angular/core';
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

  blogCardList:any = [];
  constructor() { }

  ngOnInit() {
    var curObj= this;
    $(new Array(15)).each(function () {
      debugger;
      curObj.blogCardList.push({});
    });
  }

}
