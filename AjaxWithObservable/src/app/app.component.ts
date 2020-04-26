import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  employees: Employee[] = [];

  constructor(@Inject(EmployeesService) private employeesService: EmployeesService){

  }

  onGetDataClick(){
    this.employeesService.getEmployees().subscribe(this.onAjaxSuccess, this.onAjaxError);
  }

  onAjaxSuccess = (response) => {
        this.employees = response;
  }

  onAjaxError = () => {
    alert("Error");
  }

}
