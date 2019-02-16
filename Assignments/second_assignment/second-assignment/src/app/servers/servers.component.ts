import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = '';
  empty = true;
  constructor() {

   }

  ngOnInit() {
  }
  
  updateButton($event){
    console.log(this.username.length)
    if (this.username.length > 0) this.empty = false;
    else this.empty = true;
  }

  onReset(){
    this.username = '';
    this.empty = true;
  }
}
