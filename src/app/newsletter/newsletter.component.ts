import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
//reactive form
export class NewsletterComponent implements OnInit {


  genders = ['male', 'female'];
  signupForm: FormGroup;

  //@Output() userChange = new EventEmitter<User>();

  users: User[] = [

    new User('Rip', 'rip@and.dk', "male",8, new Date(2019, 0, 1, 8, 0,0 )), 
    new User('Rap','Rap@and.dk', 'male',9,new Date(2019, 0, 1, 8, 0,0 )),
    new User('Rup', 'Rup@and.dk', 'male',10,new Date(2019, 0, 1, 8, 0,0 )),

  ];

  searchFilter : number;

  constructor() { }

  ngOnInit() {

    this.signupForm = new FormGroup({

      'username' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'gender' : new FormControl('male'),
      'favoriteNumbe': new FormControl(null),
      'birthday': new FormControl(null),

    });

  }

  onSubmit(){
    console.log(this.signupForm);
    if(this.signupForm.valid){

      let user = this.signupForm.value as User;
      this.users.push(user);

      //this.userChange.emit()

    }
    console.log(this.users)
    
  }

}
