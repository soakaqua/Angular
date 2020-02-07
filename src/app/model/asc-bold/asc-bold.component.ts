import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-asc-bold, [app-asc-bold]' ,
  templateUrl: './asc-bold.component.html',
  styleUrls: ['./asc-bold.component.css']
})
export class AscBoldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click') public onClick() {
    console.log('on a cliqué');
  }


}
