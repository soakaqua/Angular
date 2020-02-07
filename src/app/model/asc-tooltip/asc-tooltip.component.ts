import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-asc-tooltip, [app-asc-tooltip]',
  templateUrl: './asc-tooltip.component.html',
  styleUrls: ['./asc-tooltip.component.css']
})
export class AscTooltipComponent implements OnInit {

  @Input()
  private titre: string;

  private visible = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseover') onMouseOver() {
    this.visible = true;
}

  @HostListener('mouseleave') onMouseLeave() {
    this.visible = false;

  }

}
