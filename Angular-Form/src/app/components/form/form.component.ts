import { Component } from '@angular/core';
import { CountryListDataService } from 'src/app/service/country-list-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  country_list:any;
  industry_list=[
    'IT','Finance','Travel','Food'
  ]

  constructor(private countries:CountryListDataService){
    this.countries.getCountryList().subscribe(data=>{
      this.country_list=data;
    })
  }

}
