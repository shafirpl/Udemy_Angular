import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        /*
        * Here we are using slice to return a copy of the original recipe
        * array instead of returning the original recipe array, which
        * will actually return the reference to the recipe array, which will
        * allow others to change the original array, we don;t want to allow that
        */

        /*
        * However, with this approach, when we call it to get
        * the array and add new ingredient to this array, it won't work
        * as we will get a copy of the array, not the original array
        */
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        //this adding method will emit too much events,
        //that would slow down the app, it is a viable
        //option, but a slower option
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }

        //here we are using a es6 syntax, which would 
        //turn the array into a list of items
        //we can't push an array to an array, it will
        //give us errors, so this method

        //...array_name will make the array items into 
        //a list of items
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
