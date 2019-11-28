import { PipeTransform, Injectable, Pipe } from '@angular/core';
import { User } from './user.model';

@Pipe({name: 'filtername'})
@Injectable()
export class filterName implements PipeTransform{

    transform(items : User[], search: any): any{

        console.log(items)

        if(search === undefined){
            return items;
        }

        search = search.toLowerCase();
        return items.filter( user => user.gender && user.gender.toLocaleLowerCase().includes(search))

    }


}