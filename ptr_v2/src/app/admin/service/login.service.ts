import { Injectable } from '@angular/core';
import { User } from '../../model/user'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl = environment.serviceURL;

  constructor(private httpClient: HttpClient) {

  }


  public createUser(data: User) {
    return this.httpClient.post(this.apiUrl + 'api/User/Create', data);
  };
  public checkValidUserName(userName: string) {
    return this.httpClient.get(this.apiUrl + 'api/User/checkUser?userName=' + userName);
  };
  public checkValidEmail(email: string) {
    return this.httpClient.get(this.apiUrl + 'api/User/CheckEmail?email=' + email);
  };
  public validateAndLogin(userName: string, password: string): Observable<any>{
    const params = new HttpParams({ fromString: 'username=' + userName + '&password=' + password });
    return this.httpClient.get(this.apiUrl + 'api/User/CheckSignUpCred',{responseType:"json",params});
  };
}

