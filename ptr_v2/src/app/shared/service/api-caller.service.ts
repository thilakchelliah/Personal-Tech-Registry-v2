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

  public commonGetforOpenApi(url: string) {
    return this.httpClient.get(this.apiUrl + url);
  };

  public createBlogPost = function (data: any) {
    return this.httpClient.post(this.apiUrl + '/apiS/Blog/Create', data);
  };
  public deleteBlogRow = function (id: any) {
    return this.httpClient.post(this.apiUrl + '/apiS/Blog/Delete', id);

  };

  public uploadTutorialFile = function (fd) {
    return this.httpClient.post(this.apiUrl + '/apiS/Tutorial/FileUpload', fd, {
      withCredentials: true,
      headers: { 'Content-Type': undefined }
    });

  };

  public addOrUpdateTutorial = function (data, addOrUpdate) {
    var url = this.apiUrl + '/apiS/Tutorial/Create';
    if (addOrUpdate == false)
      url = this.apiUrl + '/apiS/Tutorial/Update';

    return this.httpClient.post(url, data);
  };


  public deleteTutorialRow = function (id) {
    return this.httpClient.post(this.apiUrl + '/apiS/Tutorial/Delete', id);

  };
  public fetchAllTutorial = function (fd) {
    return this.httpClient.post(this.apiUrl + '/apiS/Tutorial/Fetchs', fd, {
      withCredentials: true,
      headers: { 'Content-Type': undefined }
    });

  };

  public uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  FetchBlogDetails = function (urlId: string) {
    var config = {
      params: {
        urlId: urlId
      }
    };
    return this.httpClient.get(this.apiUrl + '/api/Blog/FetchOne', config);
  };


}
