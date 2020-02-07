import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../../client';

@Component({
  selector: 'app-client-comp',
  templateUrl: './client-comp.component.html',
  styleUrls: ['./client-comp.component.css']
})
export class ClientCompComponent implements OnInit {
  // instanciation client
 private client: Client = new Client();
 //  private client: Client = new Client('', '', 0);

  @Output()
  private ajoutC: EventEmitter<Client> = new EventEmitter<Client>();


  messageClient = '';
  public testRempli() {
    this.messageClient = 'le client ' + this.client.nom + ' ' + this.client.prenom + ' a un ca de : ' + this.client.ca;
  }

  public display(): boolean {
    // attention : quand ils sont vides, ils sont undefined !
    if(this.client.prenom && this.client.nom && this.client.ca && this.client.ca !== 0) {
      return true;
    }
    return false;
  }

  constructor() { }

  ngOnInit() {
  }

  public ajoutClient() {
    // this.ajoutC.emit({nom: this.client.nom , prenom: this.client.prenom , ca: this.client.ca} );
    this.ajoutC.emit(this.client);
    this.client = new Client();
  }

}
