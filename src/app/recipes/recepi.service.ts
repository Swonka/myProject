import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>(); 
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg'),
        new Recipe('Another Recipe', 'This is simply a test', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/crab-asparagus-pappardelle.jpg')
    
      ];

      getRecipes(){
          //returns copy of array
          return this.recipes.slice();
      }
}