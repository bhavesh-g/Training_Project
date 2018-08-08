import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private http:HttpClient) { }

  insertData(registration) {
    return this.http.post('http://localhost:3000/register_data', registration);

  }

  checklogin(login_forminput_data){
    
    return this.http.post('http://localhost:3000/login_check', login_forminput_data);
    
 
  }
    


}
