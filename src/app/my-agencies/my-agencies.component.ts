import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";

@Component({
  selector: 'app-my-agencies',
  templateUrl: './my-agencies.component.html',
  styleUrls: ['./my-agencies.component.css']
})
export class MyAgenciesComponent implements OnInit {

  agencies: Agency[] = [];

  constructor() { }

  addAgencies()
  {
    this.agencies.push(new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3));
    this.agencies.push(new Agency(2,"Sopra Steria","Nantes",47,0));
    this.agencies.push(new Agency(3,"CGI","Clermont-Ferrand",45,3));
    this.agencies.push(new Agency(4,"Capgemini","Clermont-Ferrand",46,3));
    this.agencies.push(new Agency(5,"Capgemini","Nantes",47.5,0.01));
  }
  ngOnInit() {
    this.addAgencies();
  }

}
