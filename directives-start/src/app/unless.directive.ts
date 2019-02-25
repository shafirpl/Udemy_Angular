import { 
  Directive, 
  Input, 
  TemplateRef, 
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  /*
  * here we are using set to make the property look like a method
  * However, it is still a property, it means whenever the change in property
  * is detected, the code will run
  * Here since we know we will recive a condition as input, we define the 
  * parameter as a boolean argument
  */

  /*
  * for struturual directive, the property name has to be 
  * exactly same as the directive selector name
  */
  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else{
      /*
      * If the condition is false, we will clear from the view container
      */
      this.vcRef.clear();
    }
  }
  /*
  * Remember that basically for *ngIf, the * gets converted to a ng-template
  * so in our app-component.html file, we have the same code, one with 
  * *ngIf, another is ngIf without the *, where it sits in a ng-template.
  * Similarly we can use this directive without * but it needs a ng-template,
  * that is why we need the templateRef
  * 
  * Now we need to pass 2 pieces of information, what and where, what is the
  * templateRef, the where is where it should render the template, or the view
  * container
  * 
  * vcRef = view container ref, it marks the place where we place the directive in the dom
  * 
  */
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}

/*
* So in the app.componenet.html file, the template ref is the whole div element, if we didn't 
* use *, we had to wrap it up in ng-template, by using *, angular is wrapping up that
* div element in ng-template, and the vcRef is the place where we place that 
* ng-template/div in the dom
*/
