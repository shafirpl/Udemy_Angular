import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courseProject';
  loadedFeature = 'recipe';
  onNavigate(feature:string){
    // console.log("coming from app component");
    // console.log(this.loadedFeature);
    this.loadedFeature = feature;
  }
}
