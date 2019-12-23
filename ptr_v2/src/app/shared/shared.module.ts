import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './widgets/grid/grid.component';
import { TaggerComponent } from './widgets/tagger/tagger.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GridComponent, TaggerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GridComponent,
    TaggerComponent
  ]
})
export class SharedModule { }
