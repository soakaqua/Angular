import {Component, OnInit, Output} from '@angular/core';
import {FirstService} from '../../services/first.service';

@Component({
  selector: 'app-vote-main',
  templateUrl: './vote-main.component.html',
  styleUrls: ['./vote-main.component.css']
})
export class VoteMainComponent implements OnInit {

  private nom: string = '';
  private votes = 0;

  // injection d'un service
  constructor(private olivierService: FirstService) { }

  ngOnInit() {
  }

  methode(o) {
    if(o.votes>this.votes){
      this.votes = o.votes;
      this.nom = o.nom;
    }
  }
}
