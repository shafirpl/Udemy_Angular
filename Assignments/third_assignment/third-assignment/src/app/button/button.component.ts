import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
display = 'block';
logs = [];
log = 0;
word = '';
  constructor() { }

  ngOnInit() {
  }
  toggleDisplay(){
    if(this.display==='block') this.display = 'none';
    else this.display = 'block';
    this.log++;
    this.logs.push(this.log);
  }

  getDisplay(){
    return this.display;
  }

  getColor(index){
    return index >= 5 ? 'blue' : 'inherit';
  }

}
