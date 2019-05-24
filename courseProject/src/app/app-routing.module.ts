import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoutes: Routes = [
{path: '', redirectTo:'/recipes', pathMatch: 'full'},
{ path: 'recipes', component: RecipesComponent, children: [
    //dynamic params like :id should be the last paths, because 
    // if we let's say had new after :id. what would happen 
    //is that, the new would be regarded as an id, but 
    //id should be a number, so we will get an error
    //similar to nodejs
    { path: '', component: RecipeStartComponent},
    { path: 'new', component: RecipeEditComponent },
    {path: ':id',component: RecipeDetailComponent},
    { path: ':id/edit', component: RecipeEditComponent }
] },
{ path: 'shopping-list', component: ShoppingListComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}