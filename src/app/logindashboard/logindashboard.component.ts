import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindashboard',
  templateUrl: './logindashboard.component.html',
  styleUrls: ['./logindashboard.component.css']
})
export class LogindashboardComponent implements OnInit {
  email:any;
  constructor( private router: Router) { }


  ngOnInit() {


    this.email=localStorage.getItem("email");
if(localStorage.getItem('loggedIn') == null){
this.router.navigate(['logindashboard']);
}

  }

}
