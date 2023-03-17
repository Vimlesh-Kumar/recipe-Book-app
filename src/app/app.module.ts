import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponents/header/header.component';
import { RecipesComponent } from './mycomponents/recipes/recipes.component';
import { RecipeDetailsComponent } from './mycomponents/recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './mycomponents/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './mycomponents/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './mycomponents/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './mycomponents/shopping-list/shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './mycomponents/shopping-list/shopping-list.service';
import { RouterModule, Routes } from '@angular/router';

const appRoute: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
