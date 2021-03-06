import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { NewCompanyComponent} from "./new-company/new-company.component";
import { LostPasswordComponent} from "./lost-password/lost-password.component";
import {MapComponent} from "./map/map.component";
import {AgencyComponent} from "./agency/agency.component";
import {AgencyPolesComponent} from "./agency-poles/agency-poles.component";
import {PoleComponent} from "./pole/pole.component";
import {ProjectComponent} from "./project/project.component";
import {PersonComponent} from "./person/person.component";
import {MyAgenciesComponent} from "./my-agencies/my-agencies.component";
import {ActivitiesPolesComponent} from "./activities-poles/activities-poles.component";
import {CollaboratorComponent} from "./collaborator/collaborator.component";
import {MyAccountComponent} from "./my-account/my-account.component";
import {AgencyPlanComponent} from "./agency-plan/agency-plan.component";

const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newCompany', component: NewCompanyComponent },
  { path: 'lostPassword', component: LostPasswordComponent },
  { path: 'map', component: MapComponent },
  { path: 'agency/:id', component: AgencyComponent },
  { path: 'agencyPoles/:id', component: AgencyPolesComponent },
  { path: 'pole/:idAgency/:idPole', component: PoleComponent },
  { path: 'project/:idAgency/:idPole/:idProject', component: ProjectComponent },
  { path: 'person/:idAgency/:idPerson', component: PersonComponent },
  { path: 'myAgencies', component: MyAgenciesComponent },
  { path: 'activitiesPoles', component: ActivitiesPolesComponent },
  { path: 'collaborator', component: CollaboratorComponent },
  { path: 'myAccount', component: MyAccountComponent },
  { path: 'agencyPlan/:id', component: AgencyPlanComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
