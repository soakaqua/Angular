export class Equipe {
  private _nom: string;
  private _votes: number;


  constructor(nom: string, votes: number) {
    this._nom = nom;
    this._votes = votes;
  }


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get votes(): number {
    return this._votes;
  }

  set votes(value: number) {
    this._votes = value;
  }
}
