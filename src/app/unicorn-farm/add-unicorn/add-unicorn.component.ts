import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UnicornService } from '../unicorn.service';

@Component({
  selector: 'app-add-unicorn',
  templateUrl: './add-unicorn.component.html',
  styleUrls: ['./add-unicorn.component.css']
})
export class AddUnicornComponent implements OnInit {

  unicornForm: FormGroup;
  unicornArr: any = [];

  ngOnInit() {
    this.addUnicorn()
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public unicornService: UnicornService
  ){ }

  addUnicorn() {
    this.unicornForm = this.fb.group({
      name: [''],
      color: ['']
    })
  }

  submitForm() {
    this.unicornService.CreateUnicorn(this.unicornForm.value).subscribe(res => {
      console.log('Unicorn added!')
      this.ngZone.run(() => this.router.navigateByUrl('/unicorn-list'))
    });
  }

}