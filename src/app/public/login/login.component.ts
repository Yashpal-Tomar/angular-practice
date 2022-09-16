import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from  '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

createLoginForm(){
  this.loginForm= new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
   })
}
  
  onSubmit() {
   localStorage.setItem('loginData', JSON.stringify(this.loginForm.value))
  }


  
  navigateToSignup() {
   this.router.navigateByUrl('/signup');
  }

}
