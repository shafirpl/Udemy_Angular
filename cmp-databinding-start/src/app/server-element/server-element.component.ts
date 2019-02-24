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
  ContentChild,
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
@ContentChild('contentParagraph') paragraph: ElementRef;

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
    console.log("Content child:" + this.paragraph.nativeElement.textContent);
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
