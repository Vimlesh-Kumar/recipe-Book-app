import { getLocaleEraNames } from '@angular/common';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Dosa', 'South Indian Food.', 'https://previews.123rf.com/images/vm2002/vm20021604/vm2002160400011/54724441-cone-shape-masala-dosa-with-sambar-and-chutney-south-indian-breakfast.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ]
}

