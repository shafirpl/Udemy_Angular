import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router) {
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

  onEditRecipe(){
    this.router.navigate(['edit'], { relativeTo: this.route });
    /*
    * this bottom code is another alternative.
    * this means go up one level, add this.id to that url, and as well as edit
    * So lets say we are at http://localhost:4200/recipes/0, then it would go up one level, 
    * the url will be http://localhost:4200/recipes, then it will add the id 0, so http://localhost:4200/recipes/0,
    * then it will add the edit, so url : http://localhost:4200/recipes/0/edit, the this.route will be 
    * the url we are at, so http://localhost:4200/recipes/0
    */
    //this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route } );
  }

}
