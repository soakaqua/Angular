import { Injectable } from '@angular/core';

// permet l'injection ailleur (en fait un service)
@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() {
    console.log('construction du service first');
  }

  public methodeDuService(){
    console.log('utilisation methode service');
  }
}
