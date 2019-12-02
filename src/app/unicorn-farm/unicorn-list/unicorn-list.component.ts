import { Component, OnInit } from '@angular/core';
import { UnicornService } from '../unicorn.service';

@Component({
  selector: 'app-unicorn-list',
  templateUrl: './unicorn-list.component.html',
  styleUrls: ['./unicorn-list.component.css']
})
export class UnicornListComponent implements OnInit {

  unicornList: any = [];


  ngOnInit() {
    this.loadUnicorns();
  }

  constructor(
    public unicornService: UnicornService
  ){ }

   // Issues list
   loadUnicorns() {
    return this.unicornService.GetUnicorns().subscribe((data: {}) => {
      this.unicornList = data;
    })
  }

    // Delete issue
    deleteUnicorn(data){
      var index = index = this.unicornList.map(x => {return x.unicorn_name}).indexOf(data.unicorn_name);
       return this.unicornService.DeleteUnicorn(data.id).subscribe(res => {
        this.unicornList.splice(index, 1)
         console.log('Unicorn deleted!')
       })
    }

}