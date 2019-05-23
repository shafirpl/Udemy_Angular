import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  // we are using ActivatedRoute in order to retrive the id
  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute) {
   }

  ngOnInit() {
    //here we are retriving the id
    //we are using this observable so that
    //everytime the id changes, we can react to it
    this.route.params
    .subscribe(
    (params:Params) => {
      //since the id we will get back is coming from url
      //which means it is a string, we need to convert it to 
      //a number, that is why we have + sign
      this.id = +params['id'];
      //now we are fetching the recipe
      this.recipe = this.recipeService.getRecipe(this.id);
    }
    )
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
