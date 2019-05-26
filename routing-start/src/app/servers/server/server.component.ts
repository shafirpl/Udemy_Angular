import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}

  ngOnInit() {
    /*
    * We are adding + here to convert the string to number, because
    * in our definition, we have numbers, if we didn't convert it to a number, we
    * would get something like /servers/'1', and our server won't be able to find it
    * That is why in order to change '1' to 1, we need to convert it to number
    */
   this.route.data
    .subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  //   const id = +this.route.snapshot.params['id'];
  //   this.server = this.serversService.getServer(1);
  //   this.route.params
  //     .subscribe(
  //       (params: Params) => {
  //         //similar reason discussed above, converting string to number
  //         this.server = this.serversService.getServer(+params['id']);
  //       }
  //     );
  // }

}

  onEdit() {
    //here we are adding /edit at the end of current url, so
    //we are getting the current url using relativeTo: this.route
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
