import { 
  Directive, 
  Renderer2, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'blue';
  @Input() highlightcolor: string = 'red';
  /*
  * in the hostbinding argument, we pass the property at
  * which we want to bind/apply the property
  * It has to be camel case
  * Now we can use the defined backgroundColor as a variable 
  */
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  /*
  * So like basic highlighter, we need to access the element at which we 
  * are applying the directive to, so that is why we need to have the 
  * nativeElement thing going on here. 
  * 
  * setStyle takes 3 argument, 4th one is optional, the first argument is
  * the element, the second one is the property, the third argument is the
  * value, the fourth one is flag. For example, we could use !important here
  */
  ngOnInit(){
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // )
    this.backgroundColor = this.defaultColor;
  }

  /*
  * By using hostlistener, we dynamically change something based on an event
  * , so we provide that event in the argument list in the hostlistener
  * and then specify a function (in this case mouseover()) where we define
  * what is going to happen
  */

  /*
  * Here the this.backgroundColor is the background color 
  * we defined in the @HostBinding
  */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'red'
    // )
    // this.backgroundColor = 'red';

    /*
    * Here instead of using a constant/hardcoded color, 
    * we are binding a color based on anohter input
    * We are passing that another input from app.component.html file
    * where we put [highlightcolor] = "'value'", notice the single quotaiton
    * inside double quotation
    */
    this.backgroundColor = this.highlightcolor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // )
    // this.backgroundColor = 'blue';
    

    this.backgroundColor = this.defaultColor;
  }

}
