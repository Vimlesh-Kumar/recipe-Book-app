import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Dosa',
      'South Indian Food.',
      'https://previews.123rf.com/images/vm2002/vm20021604/vm2002160400011/54724441-cone-shape-masala-dosa-with-sambar-and-chutney-south-indian-breakfast.jpg',
      [
        new Ingredient('Brinjal', 29),
        new Ingredient('Brinjavzbl', 294)
      ]
    ),
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Gobhi', 45),
        new Ingredient('Tamatar', 69)
      ]
    )
  ]

  constructor(private slService:ShoppingListService){}
  getrecipe() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }
}
