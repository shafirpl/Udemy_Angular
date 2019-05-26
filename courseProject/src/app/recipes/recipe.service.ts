/*
* This service is dedicated to managing all recipe services such
* as adding new recipes and stuff
*/

import {Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    // recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is a simply test',
        'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
        [new Ingredient('Meat',1),
        new Ingredient('French Fries',20)]),
        new Recipe('Another Test Recipe',
        'This is a simply test',
        'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/d83512a0fe4e2d338f89ccde0c5de227646921cf',
        [new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)])
    ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        /*
        * Here we are using slice to return a copy of the original recipe
        * array instead of returning the original recipe array, which
        * will actually return the reference to the recipe array, which will
        * allow others to change the original array, we don;t want to allow that
        */
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
