import { Observable, Subscription, Observer, interval   } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
    .pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));
    // this means whenver we have a change in myNumbers,
    // this function console.log will run
    //  this will print out increasing number, the reason is
    // https://www.udemy.com/the-complete-guide-to-angular-2/learn/lecture/6656538#questions/5520176
    this.numberObsSubscription = myNumbers.subscribe((number: Number) => {
      console.log(number);
    });

    /*
    * this part is a bit weird
    * so we have observable that emits or sends data
    * Here the myObservable is sending the data package
    * It sends 2 string, one at 2 second mark, another
    * at 4 second mark, and then it sends an error message
    *
    * Now in observer part, we use subscribe to detect
    * change and do stuff. So usually subscribe take
    * three functions, one function is to what to do with
    * the data, another is to handle error, and another is to
    * handle completion. So here we are printing the data
    * in the what to do part, then in handling error part
    * we are simply printing the error message send by the
    * observable.
    *
    * So what will happen is that it will print first package
    * twice, one at 2 second mark, another is at 4 second mark
    * and then it will print it does not work, as we are
    * sending an error message at 5 second mark
    *
    * For complete part, it will then print completed
    */
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first Package');
      }, 2000);

      setTimeout(() => {
        observer.next('second Package');
      }, 4000);

      setTimeout(() => {
        // observer.error('This does not work');
        observer.complete();
      }, 5000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: String) => {
        console.log(data);
      },
      (error: String) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numberObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
