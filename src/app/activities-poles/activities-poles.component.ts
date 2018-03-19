import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Pole} from "../models/pole";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-activities-poles',
  templateUrl: './activities-poles.component.html',
  styleUrls: ['./activities-poles.component.css']
})
export class ActivitiesPolesComponent implements OnInit {

  agencyPole: {agency: Agency, poles: Pole[]}[] = [];
  constructor(private auth : AuthService, private rout : Router) { }


  addPoles()
  {
    this.agencyPole[0] = {"agency": new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3),
                          "poles": [new Pole(1,"BI","desc1"),new Pole(2,"RH","desc2")]};

    this.agencyPole[1] = {"agency": new Agency(2,"CGI","Clermont-Ferrand",45.5,3),
      "poles": [new Pole(3,"BI","desc3"),new Pole(4,"Support","desc2")]};
  }

  ngOnInit() {
    this.addPoles();

  }

}
