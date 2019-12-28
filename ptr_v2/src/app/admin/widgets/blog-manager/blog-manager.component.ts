import { Component, OnInit ,ViewChild} from '@angular/core';
import { GridComponent } from '../../../shared/widgets/grid/grid.component'

@Component({
  selector: 'app-blog-manager',
  templateUrl: './blog-manager.component.html',
  styleUrls: ['./blog-manager.component.css'],
  providers:[GridComponent]
})
export class BlogManagerComponent implements OnInit {
  @ViewChild(GridComponent, { static: false }) gc: GridComponent;
  constructor() { }

  ngOnInit() {
  }
  refreshGrid(){
    this.gc.refreshGrid("/apiS/Blog/FetchAll","blogGrid");
  }

}
