import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.css']
})
export class SortieComponent implements OnInit {

  @Output()
  private evenement: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  public  declenchementEvenement() {
    // déclenche évenement
    this.evenement.emit('hello de sortie');
  }
}
