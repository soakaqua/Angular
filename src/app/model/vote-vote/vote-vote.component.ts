import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Equipe} from '../equipe';

@Component({
  selector: 'app-vote-vote',
  templateUrl: './vote-vote.component.html',
  styleUrls: ['./vote-vote.component.css']
})
export class VoteVoteComponent implements OnInit {

  @Input()
  private nomE: string;

  @Input()
  private votes: number;

  @Output()
  private voterEvent: EventEmitter<object> = new EventEmitter<object>();

  private equipe: Equipe = new Equipe('', 0);

  constructor() { }

  ngOnInit() {
  }

  public voter() {
    this.votes ++ ;
    this.voterEvent.emit({nom: this.nomE, votes: this.votes});
  }

}
