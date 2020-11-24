import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   @Output() sidebarevent : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sidebartoggler(){
   this.sidebarevent.emit();
  }


}
