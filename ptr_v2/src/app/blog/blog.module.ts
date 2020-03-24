import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogContentComponent } from './partials/blog-content/blog-content.component';
import { BlogCardComponent } from './widget/blog-card/blog-card.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogContentComponent,
    BlogCardComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
