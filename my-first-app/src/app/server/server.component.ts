import { Component } from '@angular/core';
// Typescript doesn't know where is that componenet coming from, 
// so we need to import it
@Component({
    //we are passing javascript object to configure it
    //it or the naming of the selector should be unique 
    //so that we don't override the default one
    //Best practice is to name it app-some_name

    //The templateUrl is an external file needs to be created in the same
    //folder
    //here we are creating a server.componenet.html file inside our server folder

    //give the templateUrl a relative path to the servercomponent.html
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
    }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus:string = "offline";

    constructor(){
        this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}