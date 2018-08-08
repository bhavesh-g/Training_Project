import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private register:RegisterService, private router: Router) { }

  //Variable Declaring of JSON Data
  logindata:any;
  email:any;
  password:any;


  //Variable Declation of the if else condition
  


  //Variable declaration of the subscribe funtion
  response:any;

  login(){

    alert("confirm to login");

    
    this.logindata ={
      "email":this.email,
      "password":this.password
    }
    

    this.register.checklogin(this.logindata)
        .subscribe(login_data => {
          this.response = login_data;
          
          if (this.response['status'] == false) {
            alert("Invalid Credentials!");
   
          } else {
            
            localStorage.setItem('email', this.email);
         
            this.router.navigate(['logindashboard']);
          }
        });
  
  
}





  ngOnInit() {
  }

}
