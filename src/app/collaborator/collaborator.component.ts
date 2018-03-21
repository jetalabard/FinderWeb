import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Person} from "../models/person";
import {AgencyService} from "../services/agency.service";
import {PersonService} from "../services/person.service";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  persons: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getAllPersons()
  }

  getAllPersons()
  {
    this.personService.getAll()
      .subscribe(
        data => {
          console.log("getAllPersons")
          let person:Person = new Person();
          this.persons = person.getArrayObjFromJson(data);
        },
        error => {
          console.log("error");
        }
      );
  }



}
