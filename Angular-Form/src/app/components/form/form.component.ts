import { Component } from '@angular/core';
import { CountryListDataService } from 'src/app/service/country-list-data.service';
import {FormGroup,FormControl,Validators,AbstractControl} from '@angular/forms'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  isFormValid=true;
  //dropdown options

  country_list:any;
  industry_list=[
    'IT','Finance','Travel','Food'
  ];

  // regex pattern
  integerReg=/^\d+$/;
  emailReg=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  
  // form group which will contain formcontrol (i.e every input field)
  registerForm=new FormGroup({

    comp_name:new FormControl('',[Validators.required,Validators.max(25),Validators.min(2)]),
    owner:new FormControl('',[Validators.required,Validators.maxLength(15),Validators.min(2)]),

    address:new FormGroup({
      street:new FormControl('',[Validators.required,Validators.maxLength(30)]),
      country:new FormControl('',[Validators.required,]),
      city:new FormControl('',[Validators.required,Validators.maxLength(15)]),
      state:new FormControl('',[Validators.required,Validators.maxLength(35)]),
      zip:new FormControl('',[Validators.required,Validators.maxLength(6),Validators.pattern(this.integerReg)]),
    }),

    phone:new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern(this.integerReg),Validators.minLength(10)]),
    email:new FormControl('',[Validators.required,Validators.pattern(this.emailReg)]),
    industry:new FormControl('',[Validators.required,]),
    nominal_cap:new FormControl('',[Validators.required,Validators.pattern(this.integerReg)]),

  
  })



  constructor(private countries:CountryListDataService,){
    this.countries.getCountryList().subscribe(data=>{
      this.country_list=data;
})
   
  }


  // onsubmit function
  registerFn():void {
   this.registerForm.valid?this.isFormValid=true:this.isFormValid=false;
   if(this.isFormValid){
    console.log("From is valid",this.registerForm);
    window.alert('Registered Successfully');
    this.registerForm.reset();



   } 
    
  }

  
  getControl(name:any): AbstractControl | null{
    return this.registerForm.get(name)
  }

  resetForm(){
    this.registerForm.reset();
  }


}
