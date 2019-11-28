import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(value: any, searchFilter: any): any {
    if(value.length === 0){
      return value;
    }
    const resultArray = [];
    for(const item of value){

      if(item.favoriteNumber <= searchFilter){
        resultArray.push(item);
      }
      
    }
    return resultArray;
  }

}
