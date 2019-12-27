import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './service/authentication.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const curObj = localStorage.getItem('currentUser');
    let authToken = JSON.parse(curObj);
    if (authToken) {
      this.authenticationService.verifyToken(authToken.token).subscribe(
        res => {
          if(res!="valid")
          this.router.navigate(['/admin/login']);
        },
        err => {
          this.router.navigate(['/admin/login']);
        }
      );
    }
  }
  public logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/admin/login']);
  }
}
