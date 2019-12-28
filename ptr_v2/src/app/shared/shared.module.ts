import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './widgets/grid/grid.component';
import { TaggerComponent } from './widgets/tagger/tagger.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './widgets/loader/loader.component';
import { SanitizeHtmlPipe } from './pipes/sanitize-html.pipe';
import { DisqusCommentComponent } from './widgets/disqus-comment/disqus-comment.component';
import { BlogPostFullComponent } from './widgets/blog-post-full/blog-post-full.component';
import { SanitizeURLPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [GridComponent, TaggerComponent, LoaderComponent, SanitizeHtmlPipe, DisqusCommentComponent, BlogPostFullComponent, SanitizeURLPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GridComponent,
    TaggerComponent,
    LoaderComponent,
    DisqusCommentComponent,
    SanitizeHtmlPipe,
    BlogPostFullComponent
  ],
  entryComponents: [BlogPostFullComponent],
})
export class SharedModule { }
