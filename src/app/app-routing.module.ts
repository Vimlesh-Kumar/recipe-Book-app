import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './mycomponents/recipes/recipes.component';
import { ShoppingListComponent } from './mycomponents/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
