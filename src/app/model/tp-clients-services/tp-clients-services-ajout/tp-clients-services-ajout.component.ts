import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../../client';
import {ClientsServiceService} from '../../../services/clients-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-tp-clients-services-ajout',
  templateUrl: './tp-clients-services-ajout.component.html',
  styleUrls: ['./tp-clients-services-ajout.component.css']
})
export class TpClientsServicesAjoutComponent implements OnInit {
  private client: Client = new Client();
  private create: boolean = true;
  private clientCancel: Client = new Client();
  private index: number;

// activated route : recup param
  constructor(private serviceClient: ClientsServiceService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      if(params.index) {
        this.create = false;
        this.client = this.serviceClient.clients[params.index];
        this.clientCancel = new Client(this.client.prenom, this.client.nom, this.client.ca);
        this.index = params.index;
      };
    });
  }

  ngOnInit() {
  }

  public ajouter() {
    // si on edit, on est encore sur le meme objet => pas besoin de méthode
    if (this.create === true){
      this.serviceClient.addC(this.client);
    }
    this.router.navigate(['/tpservice']);
  }
  public cancel(){
    // si create est faux
    if (!this.create) {
      // on écrase case du tableau
      this.serviceClient.clients[this.index] = this.clientCancel;
     }
    this.router.navigate(['/tpservice']);
  }

}
