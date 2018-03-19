import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Person} from "../models/person";

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.css']
})
export class CollaboratorComponent implements OnInit {

  persons: Person[] = [];

  constructor() { }

  addPersons()
  {
    this.persons.push(new Person(1,"Dupont", "Thierry", "Directeur de projet"));
    this.persons.push(new Person(2,"Kang", "Maxime", "Collaborateur"));
    this.persons.push(new Person(3,"Edouard", "Jean-Philippe", "Collaborateur"));
    this.persons.push(new Person(4,"Martin", "Martin", "Collaborateur"));
  }
  ngOnInit() {
    this.addPersons();
  }

}
