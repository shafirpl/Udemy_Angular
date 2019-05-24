import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) =>{
        this.id = +params['id'];
        //when we have /new, then the id will be null, so that is false
        //when we have /0/edit, then it won't be null, so it will be true, so we are in edit mode
        this.editMode = params['id'] != null ;
      }
    );
  }

}
