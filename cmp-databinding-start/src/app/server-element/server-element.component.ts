import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy
{
@Input ('srvElement') element: {type:string, name:string, content: string};
@Input () name:string;
@ViewChild('heading') header: ElementRef;

 ngOnChanges(changes:SimpleChanges){
  console.log("ngOnChanges called");
  console.log(changes);
 }
  constructor() { 
    console.log("COnstructor called");
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Text Content:"+ this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck called');
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentchecked called");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Text Content:" + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewchecked called");
  }
  ngOnDestroy(){
    console.log("ngOndestroy called");
  }
}
