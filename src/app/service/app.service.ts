import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const stockExchangeUrl = "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private readonly _http: HttpClient) { }

  getAllUsers() {
    return this._http.get(stockExchangeUrl);
  }
}
