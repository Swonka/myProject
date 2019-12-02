import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UnicornService } from '../unicorn.service';

@Component({
  selector: 'app-edit-unicorn',
  templateUrl: './edit-unicorn.component.html',
  styleUrls: ['./edit-unicorn.component.css']
})
export class EditUnicornComponent implements OnInit {
  unicornList: any = [];
  updateUnicornForm: FormGroup;
  
  ngOnInit() {
    this.updateForm()
  }

  constructor(
    private actRoute: ActivatedRoute,    
    public unicornService: UnicornService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) { 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.unicornService.GetUnicorn(id).subscribe((data) => {
      this.updateUnicornForm = this.fb.group({
        name: [data.name],
        color: [data.color]
      })
    })
  }

  updateForm(){
    this.updateUnicornForm = this.fb.group({
      name: [''],
      color: ['']
    })    
  }

  submitForm(){ 
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.unicornService.UpdateUnicorn(id, this.updateUnicornForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/unicorn-list'))
    })
  }

}