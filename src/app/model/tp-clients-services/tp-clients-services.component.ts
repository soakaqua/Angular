import { Component, OnInit } from '@angular/core';
import {ClientsServiceService} from '../../services/clients-service.service';

@Component({
  selector: 'app-tp-clients-services',
  templateUrl: './tp-clients-services.component.html',
  styleUrls: ['./tp-clients-services.component.css']
})
export class TpClientsServicesComponent implements OnInit {

  constructor(private serviceClient: ClientsServiceService) { }

  ngOnInit() {
  }

  public supprimer(index: number) {
    this.serviceClient.supprimerClient(index);
  }

  public editer(index: number) {

  }


}
