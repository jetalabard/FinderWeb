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
  selectedMarker: Marker = null;

  constructor() { }



  ngOnInit() {
    this.agency = new Agency(1,"Sopra Steria", "Clermont-Ferrand","47","1");

    let stage1: Stage = new Stage(1,"RDC");
    stage1.markers.push(new Marker(1111,"Pole RH","50","90",1));
    stage1.markers.push(new Marker(2221,"Projet 2","50","10",2));
    stage1.markers.push(new Marker(3331,"Bureau d'Eric","20","50",3));
    stage1.picture = "assets/images/map.JPG";
    this.agency.stages.push(stage1);

    let stage2: Stage = new Stage(2,"Etage 1");
    stage2.markers.push(new Marker(4441,"WC","10","50"));
    stage2.markers.push(new Marker(1112,"Pole Support","50","20",4));
    stage2.markers.push(new Marker(3332,"Bureau Jeanne","80","30",5));
    stage2.picture = "assets/images/map.JPG";
    this.agency.stages.push(stage2);

    let stage3: Stage = new Stage(3,"Etage 2");
    stage3.markers.push(new Marker(3333,"Bureau Michelle","50","90",6));
    stage3.markers.push(new Marker(2222,"Projet PSA","50","10",7));
    stage3.markers.push(new Marker(1113,"Pole SAV","80","50",8));
    stage3.picture = "assets/images/map.JPG";
    this.agency.stages.push(stage3);


    this.changeSelectedStage(this.agency.stages[0]);
    //this.changeSelectedMarker(-1);
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

  changeSelectedMarker(marker)
  {
    this.selectedMarker = marker;
  }

  getStyleDisplay(marker)
  {
    if(this.selectedMarker != null && marker.id == this.selectedMarker.id)
      return "block";
    else
      return "none";
  }

  getInfoMarker(marker, info = "color")
  {
    switch (marker.id.toString().substring(0,3))
    {
      case "111"://Pole
      {
        if(info == "link")
          return "/pole/"+marker.idLink;
        else
          return "blue";
      }

      case "222"://Projet
      {
        if(info == "link")
          return "/project/"+marker.idLink;
        else
          return "red";
      }
      case "333"://Person
      {
        if(info == "link")
          return "/person/"+marker.idLink;
        else
          return "green";
      }
      case "444":
      {
        if(info == "link")
          return "";
        else
          return "yellow";
      }
      default:
        return "purple";
    }
  }


}
