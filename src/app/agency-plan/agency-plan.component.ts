import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Stage} from "../models/stage";
import {Marker} from "../models/marker";

@Component({
  selector: 'app-agency-plan',
  templateUrl: './agency-plan.component.html',
  styleUrls: ['./agency-plan.component.css']
})
export class AgencyPlanComponent implements OnInit {

  agency: Agency;
  selectedStage: Stage;

  constructor() { }



  ngOnInit() {
    this.agency = new Agency(1,"Sopra Steria", "Clermont-Ferrand","47","1");

    let stage1: Stage = new Stage(1,"RDC");
    stage1.markers.push(new Marker(1,"Bureau1","50","90"));
    stage1.markers.push(new Marker(2,"Bureau2","50","10"));
    stage1.markers.push(new Marker(3,"WC","20","50"));
    this.agency.stages.push(stage1);

    let stage2: Stage = new Stage(2,"Etage 1");
    stage2.markers.push(new Marker(4,"Bureau3","50","90"));
    stage2.markers.push(new Marker(5,"Bureau4","50","10"));
    stage2.markers.push(new Marker(6,"WC1","20","50"));
    stage2.picture = "https://thumbs.dreamstime.com/z/plan-d-%C3%A9tage-14650802.jpg";
    this.agency.stages.push(stage2);

    let stage3: Stage = new Stage(3,"Etage 2");
    stage3.markers.push(new Marker(7,"Bureau5","50","90"));
    stage3.markers.push(new Marker(8,"Bureau6","50","10"));
    stage3.markers.push(new Marker(9,"WC2","80","50"));
    stage3.picture = "https://breizhhouse2013.files.wordpress.com/2012/10/plan-etage.png";
    this.agency.stages.push(stage3);


    this.changeSelectedStage(this.agency.stages[0]);
  }

  changeSelectedStage(stage)
  {
    this.selectedStage = stage;
  }

  getStyle(stage)
  {
    if(stage.id == this.selectedStage.id)
      return "#ccd5f1";
    else
      return "white";
  }


}
