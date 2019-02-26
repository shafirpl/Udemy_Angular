import { Component, OnInit } from '@angular/core';
import { AccountsService} from './accounts.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
 accounts: {name:string, status: string}[] = [];

  constructor(private accountService: AccountsService){}

  ngOnInit(){
    /*
    * This is a reference type equality, so we have access to 
    * exact same array that we had in the accounts.service.ts file
    */
    this.accounts = this.accountService.accounts;
  }
}
