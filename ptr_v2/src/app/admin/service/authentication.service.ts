import { Injectable } from '@angular/core';
import { User } from '../../model/user'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl = environment.serviceURL;

  constructor(private httpClient: HttpClient) {

  }

  public verifyToken(token: string) {
    return this.httpClient.post(this.apiUrl + '/api/user/verifyJwtToken', { "token": token });
  }

}
