import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import {Routes, RouterModule} from '@angular/router';

/*
* Routes is basically array of routes, each item defines the url,
* each item is javascript object and it contains the path, which
* defines the url, for example, users would be
* localhost:4200/users
* important to note, don't add / in front of path in
* the array
*
* second part is the action, it describes what component would be loaded
* when we go to that url.
* for example, if we go to localhost:4200/users, it will load up 
* the UsersComponent
* our first item is an empty path, so that it looks like localhost:4200 on the browser
* we want to load up home page with this route
*/
const appRoutes: Routes = [
{path: '', component: HomeComponent },
{ path: 'users', component: UsersComponent },
{ path: 'servers', component: ServersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
