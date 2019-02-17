import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Hello';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is:' + this.serverName;
    
  }

  onUpdateServerName($event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}

/*
* So remember the directive ngIf? What it is doing is that 
* if the serverCreated is true, it will only in that case 
* add the paragraph to the dom. Otherwise it won't add the 
* paragraph to dom. So initially serverCreated is false, but 
* when we click the button, it becomes true, so the paragraph becomes
* visible
*/