import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeesService {

  constructor(@Inject(HttpClient) private http: HttpClient) { 

  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>("/SampleServlet", {responseType: "json"});
  }

}
