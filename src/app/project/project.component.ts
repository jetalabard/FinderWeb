import { Component, OnInit } from '@angular/core';
import {Pole} from "../models/pole";
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {Project} from "../models/project";
import {Router} from "@angular/router";
import {Person} from "../models/person";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  agency: Agency;
  pole: Pole;
  project: Project;
  persons: Person[] = [];
  selectedPersonId: number;
  constructor(private auth : AuthService, private rout : Router) { }


  addAgencyPoleProjectPersons()
  {
    this.agency = new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3);
    this.pole = new Pole(1,"RH","desc1");
    this.project = new Project(1,"Limagrain");

    this.persons.push(new Person(1,"Dupont", "Thierry", "Directeur de projet"));
    this.persons.push(new Person(2,"Kang", "Maxime", "Collaborateur"));
    this.persons.push(new Person(3,"Edouard", "Jean-Philippe", "Collaborateur"));
    this.persons.push(new Person(4,"Martin", "Martin", "Collaborateur"));

  }

  ngOnInit() {
    this.addAgencyPoleProjectPersons();
    this.changeSelectedPerson(this.persons[0].id);
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
