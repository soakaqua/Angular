import {Routes} from '@angular/router';
import {main} from '@angular/compiler-cli/src/main';
import {VoteMainComponent} from './vote-main/vote-main.component';
import {ClientsComponent} from './clients/clients.component';
import {ParamComponent} from './param/param.component';
import {TpClientsServicesComponent} from './tp-clients-services/tp-clients-services.component';
import {TpClientsServicesAjoutComponent} from './tp-clients-services/tp-clients-services-ajout/tp-clients-services-ajout.component';

// idem avec route
// const routes:Route[] = [
export const routes: Routes = [
  // dans component : nom component devant lequel il y a export.
  {path: 'vote', component: VoteMainComponent },
  {path: 'clients', component: ClientsComponent},
  // ajout de parametre récupérable
  {path: 'param/:nom', component: ParamComponent},
  {path: 'tpservice', component: TpClientsServicesComponent},
  {path: 'ajoutclient', component: TpClientsServicesAjoutComponent},
  {path: 'ajoutclient/:index', component: TpClientsServicesAjoutComponent}

];
