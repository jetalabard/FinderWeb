import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agency: Agency;
  agencies: Agency[] = [];
  isAdmin: boolean = false;
  constructor(private auth : AuthService, private rout : Router) { }


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
    this.agency = this.agencies[0];
    this.isAdmin = this.auth.isAdmin();
  }

  addFavorites()
  {
    //add favorite
    this.rout.navigate(['/myAgencies']);
  }

}
