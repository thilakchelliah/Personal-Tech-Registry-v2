import { Component, OnInit } from '@angular/core';
import { GridComponent } from '../../../shared/widgets/grid/grid.component'

@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.css']
})
export class BlogManagerComponent implements OnInit {

  constructor(private gc: GridComponent) { }

  ngOnInit() {
  }
  refreshGrid(){
    this.gc.refreshGrid();
  }

}
