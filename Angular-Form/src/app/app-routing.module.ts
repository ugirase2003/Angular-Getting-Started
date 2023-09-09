import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { EmployeesComponent } from './components/employees/employees.component';

const routes: Routes = [
{path:'',component:FormComponent},
{path:'employeeData',component:EmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
