import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

   
   private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super-tasty Schnitzel - just awesome!', 
        'https://www.thespruceeats.com/thmb/VYxi1MPOLh3W286dhp270ozcjrY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
        [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ]
        ),
        new Recipe('Big Fat Burger', 
        'What else toy need to say', 
        'https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/720/1x/cbbc/bp-big-burger-quiz.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat',1)
        ]
        )
    
      ];

      constructor(private slService : ShoppingListService){
        
      }

      getRecipes(){
          //returns copy of array
          return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}