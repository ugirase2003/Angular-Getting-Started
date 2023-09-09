import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  url = "https://dummyjson.com/users";
  constructor(private http: HttpClient) {

  }
  getEmployeeData() {
    return this.http.get(this.url);
  }
}
