import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameinput:HTMLInputElement) {
    // console.log(nameinput);
    // console.log(nameinput.value);
    console.log(this.serverContentInput);
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({
      serverName: nameinput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameinput: HTMLInputElement) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: this.newServerName,
  //     content: this.newServerContent
  //   });
  // }

    this.blueprintCreated.emit({
      serverName: nameinput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });

  }

}
