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
    this.persons.push(new Person());
    this.persons.push(new Person());
    this.persons.push(new Person());
    this.persons.push(new Person());
  }
  ngOnInit() {
    this.addPersons();
  }

}
