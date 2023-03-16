import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged=new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 80),
    new Ingredient('Tomato', 8),
    new Ingredient('Potato', 45)
  ];
  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(Ingredient:Ingredient)
  {
    this.ingredients.push(Ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
