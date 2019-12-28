import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'
import { BlogRoutingModule } from './blog-routing.module';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BlogComponent } from './blog.component';
import { BlogContentComponent } from './partials/blog-content/blog-content.component';
import { BlogCardComponent } from './widget/blog-card/blog-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
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
