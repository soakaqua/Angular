import {Personne} from './Personne';

export class Client extends Personne {
  private _ca: number;
  //si on déclarait ca dans le constructeur on aurait pas besoin de this._ca = _ça
  constructor(prenom?: string, nom?: string, _ca?: number) {
    super(prenom, nom);
    // pas besoin car on l'a en parametre.
    this._ca = _ca;
  }

  get ca(): number {
    return this._ca;
  }

  set ca(value: number) {
    this._ca = value;
  }


}
