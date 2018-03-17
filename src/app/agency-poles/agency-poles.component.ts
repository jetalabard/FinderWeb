import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {Router} from "@angular/router";
import {Pole} from "../models/pole";

@Component({
  selector: 'app-agency-poles',
  templateUrl: './agency-poles.component.html',
  styleUrls: ['./agency-poles.component.css']
})
export class AgencyPolesComponent implements OnInit {

  agency: Agency;
  poles: Pole[] = [];
  selectedPoleId: number;
  constructor(private auth : AuthService, private rout : Router) { }


  addAgencyPoles()
  {
    this.agency = new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3);
    this.poles.push(new Pole(1,"BI","desc1"));
    this.poles.push(new Pole(2,"RH","desc2"));
    this.poles.push(new Pole(3,"Support","desc3"));
    this.poles.push(new Pole(4,"Maintenance Informatique","desc4"));
  }

  ngOnInit() {
    this.addAgencyPoles();
    this.changeSelectedPole(this.poles[0].id);
  }

  changeSelectedPole(id)
  {
    this.selectedPoleId = id;
  }

  getStyle(id)
  {
    if(id == this.selectedPoleId)
      return "#ccd5f1";
    else
      return "white";
  }

}
