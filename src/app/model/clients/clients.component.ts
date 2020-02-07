import { Component, OnInit } from '@angular/core';
import {Client} from '../client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private clientAAj: Client = new Client();
  private filtre = '';
  private clients: Client[] = [new Client('toto', 'titi', 30), new Client('prenomTest', 'nomTest', 50) ];

  // private clientsF: Client[] = this.clients.filter(c => c.nom.indexOf('') !== -1);

  constructor() { }

  ngOnInit() {
  }


  public ajoutAList(c: Client) {

    // Pas besoin : on a juste à créer un nouveau client dans
    // this.clientAAj = new Client();
    // this.clientAAj.ca = c.ca;
    // this.clientAAj.nom = c.nom;
    // this.clientAAj.prenom = c.prenom;
    // this.clients.push(this.clientAAj);

    this.clients.push(c);
  }

  public filter() {
    // return this.clients.filter(c => c.nom.indexOf(this.filtre) !== -1);
    return this.clients.filter(c => {
      return c.nom.indexOf(this.filtre) !== -1 || c.prenom.indexOf(this.filtre) !== -1;
    });

  }

}
