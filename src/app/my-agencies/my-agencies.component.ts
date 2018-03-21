import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {AgencyService} from "../services/agency.service";

@Component({
  selector: 'app-my-agencies',
  templateUrl: './my-agencies.component.html',
  styleUrls: ['./my-agencies.component.css']
})
export class MyAgenciesComponent implements OnInit {

  agencies: Agency[] = [];

  constructor(private agencyService: AgencyService) { }

  ngOnInit() {
    this.getAllAgencies();
  }

  getAllAgencies()
  {
    this.agencyService.getAll()
      .subscribe(
        data => {
          let agency: Agency = new Agency();
          this.agencies = agency.getArrayObjFromJson(data);
        },
        error => {
          console.log("error");
        }
      );
  }

}
