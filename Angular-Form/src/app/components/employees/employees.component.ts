import { Component } from '@angular/core';
import { EmployeeDataService } from 'src/app/service/employee-data.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
resp:any;

// it will contain all employees or users
employees:any;

constructor(private employeeData:EmployeeDataService){
  this.employeeData.getEmployeeData().subscribe(data=>{
    // storing service(http resp)  response 
    this.resp=data;
    this.employees=this.resp.users;
  })

}
}
