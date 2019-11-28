
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { AdminService } from '../auth/admin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;


  constructor(private fb: FormBuilder, private router: Router, 
    private auth: AuthService, private adminService: AdminService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "username": new FormControl(null),
      "Password": new FormControl(null),
    })
  }
  
  public onLoginClick() : void {
    console.log(this.loginForm);  
    

    // If this form is valid - then call the server.
    if (this.loginForm.valid) {


      if (this.loginForm.value.username === 'admin') {
        this.adminService.loginAdmin().subscribe(()=> {
          this.router.navigate(['portal/user-admin']);
        });
      } 
      else {
        console.log("In login");
        this.auth.login().subscribe(()=> {
          this.router.navigate(['portal']);
        }); 
      }
    } else {
      console.log("Cant. Must fix form errors first");
    }


  }

}