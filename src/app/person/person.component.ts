import { Component, OnInit } from '@angular/core';
import {Person} from "../models/person";
import {Agency} from "../models/agency";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  agency: Agency;
  person: Person;

  ngOnInit() {
    this.agency = new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3);
    this.person = new Person(1,"Dupont", "Thierry", "Directeur de projet");
  }

}
