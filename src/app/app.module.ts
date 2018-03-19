import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { NewCompanyComponent } from './new-company/new-company.component';
import { MapComponent } from './map/map.component';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule} from "@angular/forms";
import { AgencyComponent } from './agency/agency.component';
import { AgencyPolesComponent } from './agency-poles/agency-poles.component';
import { PoleComponent } from './pole/pole.component';
import { ProjectComponent } from './project/project.component';
import { PersonComponent } from './person/person.component';
import { MyAgenciesComponent } from './my-agencies/my-agencies.component';
import { ActivitiesPolesComponent } from './activities-poles/activities-poles.component';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AgencyPlanComponent } from './agency-plan/agency-plan.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    MenuBarComponent,
    LostPasswordComponent,
    NewCompanyComponent,
    MapComponent,
    AgencyComponent,
    AgencyPolesComponent,
    PoleComponent,
    ProjectComponent,
    PersonComponent,
    MyAgenciesComponent,
    ActivitiesPolesComponent,
    CollaboratorComponent,
    MyAccountComponent,
    AgencyPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
