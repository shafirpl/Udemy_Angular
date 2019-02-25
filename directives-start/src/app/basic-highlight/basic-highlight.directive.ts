import { Directive, ElementRef, OnInit } from "@angular/core";

/*
* For directive to work, we need to import it and
* pass an object in the Directive
* The minimum is that it needs to have a selector
* Usually we use camel case letter when naming selector
* for directives, such as helloWorld instead of hello-world

* Here we are using [] so that we can use this directive
* in other parts without using [] in those other files
* We need to add it to app.module.ts file and import it there as well
* in order to use it
*/
@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  /*
   * Watch from 2:08 mark
   * https://www.udemy.com/the-complete-guide-to-angular-2/learn/v4/t/lecture/13193718?start=0
   * Here we are trying to access the element in which we are using
   * the directive. It is similar to say if we were using
   * ngIf in a div element, and we were writing a directive
   * for it, then we would try to access that div element
   * which has ngIf
   */
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit(){
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
