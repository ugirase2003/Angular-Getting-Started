import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// remember to add Http..mod in app.module.ts file (in import part)
@Injectable({
  providedIn: 'root'
})
export class CountryListDataService {

  url = "https://restcountries.com/v3.1/all";
  constructor(private http: HttpClient) {

  }
  getCountryList() {
    return this.http.get(this.url);
  }
}
