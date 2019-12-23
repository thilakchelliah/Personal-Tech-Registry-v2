import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {
  apiUrl = environment.serviceURL;
  constructor(private httpClient: HttpClient) { }

  public callGetUrlTofetch (url: string) {
    return this.httpClient.get(this.apiUrl + url);
  };

}
