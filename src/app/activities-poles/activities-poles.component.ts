import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Pole} from "../models/pole";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {PoleService} from "../services/pole.service";
import {Stage} from "../models/stage";
import {Marker} from "../models/marker";
import {AgencyService} from "../services/agency.service";

@Component({
  selector: 'app-activities-poles',
  templateUrl: './activities-poles.component.html',
  styleUrls: ['./activities-poles.component.css']
})
export class ActivitiesPolesComponent implements OnInit {

  agencyPole: {agency: Agency, poles: Pole[]}[] = [];

  constructor(private poleService : PoleService, private agencyService : AgencyService, private rout : Router, private route: ActivatedRoute) { }



  ngOnInit() {
    this.getAgenciesAndPoles()
  }

  getAgenciesAndPoles()
  {
    let agencies: Agency[] = [];
    this.agencyService.getAll()
      .subscribe(
        dataA => {
          let agency: Agency = new Agency();
          agencies = agency.getArrayObjFromJson(dataA);
          for(let a of agencies)
          {
            let poles: Pole[] = [];
            for(let idPole of a.poles)
            {
              this.poleService.get(idPole)
                .subscribe(
                  dataP => {
                    let pole: Pole = new Pole();
                    pole.fillFromJson(JSON.parse(dataP.toString()))
                    poles.push(pole);
                  },
                  error => {
                    console.log("error");
                  }
                );
            }
            this.agencyPole.push({"agency":a,"poles":poles});
          }
        },
        error => {
          console.log("error");
        }
      );
  }

}
