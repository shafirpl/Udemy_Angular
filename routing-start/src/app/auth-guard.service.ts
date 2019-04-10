import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

/*
* Here we are basically faking a authentication system. Like nodejs passport method, we are
* assuming that only if the users are authenticated, we will allow them to visit the route,
* Otherwise, we won't allow them to visit the route. So we are using auth-guard to write
* our passport.js stuff. So what happens is that auth.service.ts has a fake authentication
* service, if the authentication is true there, we pass that true from there to here
* (watch the youtube video about how javascript promise work) and resolve it using then
* part. If it is true, we return ture, otherwise we navigate away from the url.
*
* In order to use authguard, we need to use the canActivate method. If it is true, then
* the authguard will allow the visitors to pass, otherwise it will navigate away, the behaviour
* we defined.
*
* However, after video 139, we are not faking it anymore. After video 139, we have two
* buttons in homepage, login button will mark the loggedin flag as true in the auth-service,
* and the logout button will mark the loggedin flag as false. So from there we decide the
* behaviour.
*/

/*
* Remember, we need injectable to use another service in here, so since we
* want to use auth.service.ts stuff here, we need to use injectable here, and then
* use the class in constructor
*/
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild  {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
                return this.authService.isAuthenticated()
                .then(
                  (authenticated: boolean) => {
                    if (authenticated) {
                      return true;
                    } else {
                      this.router.navigate(['/']);
                    }
                  }
                );
              }
  /*
  * Here since canActivate and canActivateChild will have the same logic,
  * we are just reusing canActivate method code here, and passing in the
  * arguments.
  */
  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
    }
}
