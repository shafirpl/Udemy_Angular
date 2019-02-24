import { 
  Component, 
  OnInit, 
  Output, 
  EventEmitter 
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameNumber = new EventEmitter<{Number: number}>();
  time: number = 1000;
  count: number = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }

  gameStart(){
    this.ref = setInterval(() => {
      this.gameNumber.emit({
        Number: this.count
      });
      this.count++;
    }, this.time);
  }

  gameStop(){
    clearInterval(this.ref);
    
  }
  

}
