import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private register:RegisterService) { }
    //varibles of the JSON Data
registrationdata:any;
  name:any;
  phone:any;
  email:any;
  password:any;
  
 //variable of service of service function

  registration(){
    this.registrationdata = {
      "name":this.name,
      "phone":this.phone,
      "email":this.email,
      "password":this.password
     
    }
    this.register.insertData(this.registrationdata)
    .subscribe(registration => {
    

    this.name = "";
    this.password = "";
    this.email = "";
    this.phone = "";
    });
  }
  
    ngOnInit() {
    }
  
  }
  