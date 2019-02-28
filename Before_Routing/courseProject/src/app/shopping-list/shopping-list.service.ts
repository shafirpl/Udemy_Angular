import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
    ingredients: Ingredient[] = [
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
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
    }
}
