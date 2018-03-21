import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {AgencyService} from "../services/agency.service";

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {

  agency: Agency = new Agency();
  isAdmin: boolean = false;

  constructor(private agencyService : AgencyService, private auth : AuthService, private rout : Router, private route: ActivatedRoute) { }



  ngOnInit() {
    this.route.params.subscribe( params => this.getAgency(params.id));

    this.isAdmin = this.auth.isAdmin();
  }

  addFavorites()
  {
    //add favorite
    this.rout.navigate(['/myAgencies']);
  }


  getAgency(id)
  {
    this.agencyService.get(id)
      .subscribe(
        data => {
          this.agency.fillFromJson(JSON.parse(data.toString()));
          console.log("agency : ");
          console.log(this.agency);
        },
        error => {
          console.log("error");
        }
      );
  }

}
