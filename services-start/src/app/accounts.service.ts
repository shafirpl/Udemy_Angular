import { LoggingService } from "./logging.service";
import { Injectable, EventEmitter } from "@angular/core";

/*
* Scroll below to see why we need @injectable directive
*/

@Injectable()

export class AccountsService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    /*
    * Here we are injecting a service into another service, both the service has to be
    * in the providers array list in app.module.ts file
    * If we inject a service into another thing, that thing has to
    * have some metadata on it. Usullay they come from @, for example:
    * A directive has meta data because that has @ directive, a component has metadata 
    * because it has @componenet
    * 
    * The injectable directive should be placed at which we are injecting the service, 
    * in this scenario, we are injecting here, so we need to place that directive here
    */
    statusUpdated = new EventEmitter<string>();
    constructor(private loggingService: LoggingService){}

    addAccount(name:string, status:string){
        this.accounts.push({name:name, status:status});
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id:number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
    }
}