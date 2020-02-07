import { Injectable } from '@angular/core';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  private _clients: Client[] = [new Client('nom1', 'prenom1', 1000), new Client('lilia', 'nomLilia', 4000)]

  constructor() {
  }

  get clients(): Client[] {
    return this._clients;
  }

  public supprimerClient(index: number) {
    this._clients.splice( index, 1);
  }

  public addC(client: Client) {
    this._clients.push(client);
  }

}


