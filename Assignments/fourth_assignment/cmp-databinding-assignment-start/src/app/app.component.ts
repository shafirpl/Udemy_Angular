import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gameNumbers:number[]=[];
  constructor() { }

  ngOnInit() {
  }

  gameLogic(gameData: {Number: number}){
    // console.log(gameData.Number);
    this.gameNumbers.push(gameData.Number);
  
    console.log(this.gameNumbers);
  }
}
