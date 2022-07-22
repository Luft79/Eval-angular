import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  getRequest<T>(url: string):Observable<T>{
    console.log(url);
    return this._httpClient.get<T>(url)
  }
}
