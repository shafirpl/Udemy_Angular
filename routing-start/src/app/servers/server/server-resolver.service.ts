import { ServersService } from './../servers.service';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

/*
* We need to also add this in the app.module.ts like this: providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
* also need to add this in our routing module: app.routing.module.ts
*/

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
//here we are using the interface Server
export class ServerResolver implements Resolve<Server>{
  constructor(private serversService: ServersService) {}
  // it requires us to implement the resolve method
  //this method takes two arguments
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise <Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}
