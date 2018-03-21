import { Component, OnInit } from '@angular/core';
import {Pole} from "../models/pole";
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {Project} from "../models/project";
import {ActivatedRoute, Router} from "@angular/router";
import {Person} from "../models/person";
import {AgencyService} from "../services/agency.service";
import {ProjectService} from "../services/project.service";
import {PoleService} from "../services/pole.service";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  agency: Agency = new Agency();
  pole: Pole = new Pole();
  project: Project = new Project();
  persons: Person[] = [];
  selectedPersonId: number;
  emptyPersons: boolean = true;

  constructor(private personService : PersonService, private projectService : ProjectService, private poleService : PoleService, private agencyService : AgencyService, private rout : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.getAgencyAndPoleAndProjectAndPersons(params.idAgency, params.idPole, params.idProject));
  }


  getAgencyAndPoleAndProjectAndPersons(idAgency, idPole, idProject)
  {
    this.agencyService.get(idAgency)
      .subscribe(
        dataA => {
          this.agency.fillFromJson(JSON.parse(dataA.toString()));
          this.poleService.get(idPole)
            .subscribe(
              dataP => {
                this.pole.fillFromJson(JSON.parse(dataP.toString()));
                this.projectService.get(idProject)
                  .subscribe(
                    dataPro => {
                      this.project.fillFromJson(JSON.parse(dataPro.toString()));
                      for(let idPerson of this.project.collaborator)
                      {
                        this.personService.get(idPerson)
                          .subscribe(
                            dataPro => {
                              let person: Person = new Person();
                              person.fillFromJson(JSON.parse(dataPro.toString()))
                              this.persons.push(person);
                              this.emptyPersons = false;
                            },
                            error => {
                              console.log("error");
                            }
                          );
                      }
                      this.changeSelectedPerson(this.persons[0]._id);

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

        },
        error => {
          console.log("error");
        }
      );
  }


  changeSelectedPerson(id)
  {
    this.selectedPersonId = id;
  }

  getStyle(id)
  {
    if(id == this.selectedPersonId)
      return "#ccd5f1";
    else
      return "white";
  }

}
