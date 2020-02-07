import {Component} from '@angular/core';
import {Personne} from './model/Personne';
import {Client} from './model/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'angularCli';
  olivier: Personne = new Personne('toto', 'tat');
  message = '';

  public hello() {
    this.message = 'salut';
  }

  public methode(param) {
    console.log(param);
  }


}


