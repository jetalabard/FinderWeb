import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {ActivatedRoute, Router} from "@angular/router";
import {Pole} from "../models/pole";
import {AgencyService} from "../services/agency.service";
import {forEach} from "@angular/router/src/utils/collection";
import {PoleService} from "../services/pole.service";

@Component({
  selector: 'app-agency-poles',
  templateUrl: './agency-poles.component.html',
  styleUrls: ['./agency-poles.component.css']
})
export class AgencyPolesComponent implements OnInit {

  agency: Agency = new Agency();
  poles: Pole[] = [];
  selectedPoleId: number;
  emptyPoles: boolean = true;
  constructor(private poleService : PoleService, private agencyService : AgencyService, private rout : Router, private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe( params => this.getAgencyAndPoles(params.id));
  }

  getAgencyAndPoles(id)
  {
    this.agencyService.get(id)
      .subscribe(
        dataA => {
          this.agency.fillFromJson(JSON.parse(dataA.toString()));
          for(let idPole of this.agency.poles)
          {
            this.poleService.get(idPole)
              .subscribe(
                dataP => {
                  let pole: Pole = new Pole();
                  pole.fillFromJson(JSON.parse(dataP.toString()))
                  this.poles.push(pole);
                  this.emptyPoles = false;
                },
                error => {
                  console.log("error");
                }
              );
          }

        },
        error => {
          console.log("error");
        }
      );
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
