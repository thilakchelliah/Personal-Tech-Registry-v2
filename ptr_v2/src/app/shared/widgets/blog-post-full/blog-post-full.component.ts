import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ApiCallerService } from '../../service/api-caller.service'
import { SanitizeHtmlPipe } from "../../../shared/pipes/sanitize-html.pipe"
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-blog-post-full',
  templateUrl: './blog-post-full.component.html',
  styleUrls: ['./blog-post-full.component.css']
})
export class BlogPostFullComponent implements OnInit {
  @Input() urlId: string;
  tagArray: string[];
  title: string;
  previewText: string;
  createdDate: string;
  tagData: string;
  htmlString: string;
  user: string;
  blogPic:any;
  currentPageUniqueId: string;
  urlIdFin: string;
  constructor(private bms: ApiCallerService, private route: ActivatedRoute, protected sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (this.urlId == null || this.urlId == "") {
      this.urlIdFin = this.route.snapshot.paramMap.get('id');
    }
    else {
      this.urlIdFin = this.urlId;
    }
    this.bms.FetchBlogDetails(this.urlIdFin).subscribe(
      (response) => {

        this.title = response.title;
        this.previewText = response.previewText;
        //this.user = (response.user)[0].username;
        this.createdDate =moment( response.createdDate, moment.ISO_8601).format('MM/DD/YYYY');
        this.blogPic = this.sanitizer.bypassSecurityTrustUrl(response.blogPic);
        this.tagData = response.tagData;
        this.htmlString = response.htmlString;
        this.currentPageUniqueId = "blogPage_" + this.urlIdFin;
      },

      (err) => {
        alert(err);
      });
  };
}


