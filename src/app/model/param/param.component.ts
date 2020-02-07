import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-param',
  templateUrl: './param.component.html',
  styleUrls: ['./param.component.css']
})
export class ParamComponent implements OnInit {

  private nomRecu: string;

  // activatedRoute :  injection qui permet de récupérer le parametre
  // private router: Router : faire des traitements avant d'aller sur une page !
  constructor(private activatedRoute: ActivatedRoute , private router: Router) {
    // Pour utiliser le param récupéré : on doit le récupérer quand il est pret avec subscribe !
    // ici on fait une fonction après =>
    this.activatedRoute.params.subscribe( lesParametres => {
      this.nomRecu = lesParametres.nom ;
    });

  }

  ngOnInit() {
  }

  public goToClient() {
    //code
    //traitements
    // quand on veut faire des traitements avant d'aller sur une page ! (équivalent aux controllers de spring)
    this.router.navigate( ['/clients']);
  }

}
