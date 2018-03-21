import { Component, OnInit } from '@angular/core';
import {Person} from "../models/person";
import {Agency} from "../models/agency";
import {AgencyService} from "../services/agency.service";
import {AuthService} from "../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PersonService} from "../services/person.service";
import {Pole} from "../models/pole";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private agencyService : AgencyService, private personService : PersonService, private rout : Router, private route: ActivatedRoute) { }

  agency: Agency = new Agency();
  person: Person = new Person();

  ngOnInit() {
    this.route.params.subscribe( params => this.getAgencyAndPoles(params.idAgency, params.idPerson));
  }

  getAgencyAndPoles(idAgency, idPerson)
  {
    this.agencyService.get(idAgency)
      .subscribe(
        dataA => {
          this.agency.fillFromJson(JSON.parse(dataA.toString()));
          this.personService.get(idPerson)
            .subscribe(
              dataP => {
                this.person.fillFromJson(JSON.parse(dataP.toString()));
              },
              error => {
                console.log("error");
              }
            );

        },
        error => {
          console.log("error");
        }
      );
  }


}
