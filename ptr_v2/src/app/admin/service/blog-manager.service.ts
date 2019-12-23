import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BlogManagerService {

  apiUrl = environment.serviceURL;
  constructor(private http: HttpClient) { }

  CreateBlogPost(data: any) {
    return this.http.post(this.apiUrl + 'apiS/Blog/Create', data);
  };
  DeleteBlogRow = function (id: string) {
    return this.http.post(this.apiUrl + 'apiS/Blog/Delete', id);
  };

}
