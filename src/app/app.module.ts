import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CouleurComponent } from './model/couleur/couleur.component';
import { ClientCompComponent } from './model/Client/client-comp/client-comp.component';
import { CacherComponent } from './model/cacher/cacher.component';
import { AscBoldComponent } from './model/asc-bold/asc-bold.component';
import { AscBoldElementComponent } from './model/asc-bold-element/asc-bold-element.component';
import { AscTooltipComponent } from './model/asc-tooltip/asc-tooltip.component';
import { SortieComponent } from './model/sortie/sortie.component';
import { VoteMainComponent } from './model/vote-main/vote-main.component';
import { VoteVoteComponent } from './model/vote-vote/vote-vote.component';
import { TestDirective } from './model/directives/test.directive';
import { ClientsComponent } from './model/clients/clients.component';
import {RouterModule} from '@angular/router';
import {routes} from './model/routes';
import { ParamComponent } from './model/param/param.component';
import { PersoPipe } from './pipe/perso.pipe';
import {FirstService} from './services/first.service';
import { TpClientsServicesComponent } from './model/tp-clients-services/tp-clients-services.component';
import {ClientsServiceService} from './services/clients-service.service';
import { TpClientsServicesAjoutComponent } from './model/tp-clients-services/tp-clients-services-ajout/tp-clients-services-ajout.component';

@NgModule({
  declarations: [
    AppComponent,
    CouleurComponent,
    ClientCompComponent,
    CacherComponent,
    AscBoldComponent,
    AscBoldElementComponent,
    AscTooltipComponent,
    SortieComponent,
    VoteMainComponent,
    VoteVoteComponent,
    TestDirective,
    ClientsComponent,
    ParamComponent,
    PersoPipe,
    TpClientsServicesComponent,
    TpClientsServicesAjoutComponent

  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [FirstService, ClientsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
