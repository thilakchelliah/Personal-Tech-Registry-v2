import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidUser = false;
  username = "";
  password = "";
  showOrHideLoader: string = "none";
  constructor(private loginService: LoginService, private router: Router) { };

  public toggleInvUser(curVal: boolean) {
    this.invalidUser = curVal;
  };

  public keyCheck(e) {
    if (e.keyCode === 13) {
      this.ValidateAndLogin()
    }

  }
  public ValidateAndLogin() {
    this.showOrHideLoader = "block";
    var username = this.username;
    var password = this.password;
    this.loginService.validateAndLogin(username, password).subscribe((response: any) => {
      console.log(response);
      this.showOrHideLoader = "none";
      if (response.result != "Error") {
        if (response.token) {
          var userObj = {
            username: username,
            token: response.token,
            expiryTime: response.expirytime,
            userId: response.userDataId
          };
          localStorage.setItem('currentUser', JSON.stringify(userObj))
          this.router.navigate(['/admin/dashboard']);
        }
      }
      else {       
        alert(response.message);
      }
    }
      , error => {
        this.showOrHideLoader = "none";
        alert(error.message);
        console.log(error);// Error getting the data
      })
  }

  ngOnInit() {
    this.showOrHideLoader = "none"
  }


}
