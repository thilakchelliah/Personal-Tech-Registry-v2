import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { SharedModule } from  '../shared/shared.module'
import { DtRoutingModule } from './dt-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DtRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class DtModule { }
