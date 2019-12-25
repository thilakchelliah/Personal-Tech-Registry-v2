import { Component, OnInit, Input } from '@angular/core';
import { BlogManagerService } from '../../service/blog-manager.service'
import { SanitizeHtmlPipe } from "../../../shared/pipes/sanitize-html.pipe"

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
  constructor(private bms: BlogManagerService) { }

  ngOnInit() {
    this.bms.FetchBlogDetails(this.urlId).subscribe(
      (response) => {

        this.title = response.title;
        this.previewText = response.previewText;
        //this.user = (response.user)[0].username;
        this.createdDate = response.createdDate;
        this.tagData = response.tagData;
        this.htmlString = response.htmlString;
      },

      (err) => {
        alert(err);
      });
  };
}


