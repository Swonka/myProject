import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';
import { EventEmitter } from '@angular/core';


export class ShoppingListService{
    ingredientsChanged = new Subject<Ingredient[]>();
      //local array for storing data
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients(){
      return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    //spreading. each ingredients gets push to array
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}