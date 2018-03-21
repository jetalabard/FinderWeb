import { Component, OnInit } from '@angular/core';
import {Agency} from "../models/agency";
import {Stage} from "../models/stage";
import {Marker} from "../models/marker";
import {Pole} from "../models/pole";
import {AgencyService} from "../services/agency.service";
import {PoleService} from "../services/pole.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MarkerService} from "../services/marker.service";
import {StageService} from "../services/stage.service";

@Component({
  selector: 'app-agency-plan',
  templateUrl: './agency-plan.component.html',
  styleUrls: ['./agency-plan.component.css']
})
export class AgencyPlanComponent implements OnInit {

  agency: Agency;
  selectedStage: Stage;
  selectedMarker: Marker = null;

  emptyStages: boolean = true;

  constructor(private markerService : MarkerService, private stageService : StageService, private agencyService : AgencyService, private rout : Router, private route: ActivatedRoute) { }



  ngOnInit() {
    // this.agency = new Agency();

    // let stage1: Stage = new Stage(1,"RDC");
    // stage1.markers.push(new Marker(1111,"Pole RH","50","90",1));
    // stage1.markers.push(new Marker(2221,"Projet 2","50","10",2));
    // stage1.markers.push(new Marker(3331,"Bureau d'Eric","20","50",3));
    // this.agency.stages.push(stage1);
    //
    // let stage2: Stage = new Stage(2,"Etage 1");
    // stage2.markers.push(new Marker(4441,"WC","50","90"));
    // stage2.markers.push(new Marker(1112,"Pole Support","50","10",4));
    // stage2.markers.push(new Marker(3332,"Bureau Jeanne","20","50",5));
    // stage2.picture = "https://thumbs.dreamstime.com/z/plan-d-%C3%A9tage-14650802.jpg";
    // this.agency.stages.push(stage2);
    //
    // let stage3: Stage = new Stage(3,"Etage 2");
    // stage3.markers.push(new Marker(3333,"Bureau Michelle","50","90",6));
    // stage3.markers.push(new Marker(2222,"Projet PSA","50","10",7));
    // stage3.markers.push(new Marker(1113,"Pole SAV","80","50",8));
    // stage3.picture = "https://breizhhouse2013.files.wordpress.com/2012/10/plan-etage.png";
    // this.agency.stages.push(stage3);


    //this.changeSelectedStage(this.agency.stages[0]);

    //this.changeSelectedMarker(-1);
    this.route.params.subscribe( params => this.getAgencyAndStagesAndMarkers(params.id));
  }

  getAgencyAndStagesAndMarkers(id)
  {
    this.agencyService.get(id)
      .subscribe(
        dataA => {
          this.agency.fillFromJson(JSON.parse(dataA.toString()));
          for(let idStage of this.agency.plans)
          {
            this.stageService.get(idStage)
              .subscribe(
                dataS => {
                  let stage: Stage = new Stage();
                  stage.fillFromJson(JSON.parse(dataS.toString()))

                  for(let idMarker of stage.markers)
                  {
                    this.markerService.get(idMarker)
                      .subscribe(
                        dataM => {
                          let marker: Marker = new Marker();
                          marker.fillFromJson(JSON.parse(dataM.toString()))
                          stage.objectMarkers.push(marker);
                        },
                        error => {
                          console.log("error");
                        }
                      );
                  }

                  this.agency.objectStages.push(stage);
                  this.emptyStages = false;
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




  changeSelectedStage(stage)
  {
    this.selectedStage = stage;
  }

  getStyle(stage)
  {
    if(stage.id == this.selectedStage._id)
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
    if(this.selectedMarker != null && marker._id == this.selectedMarker._id)
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
          return "/pole/"+this.agency._id+"/"+marker.object;
        else
          return "blue";
      }

      case "222"://Projet
      {
        if(info == "link")
          return "/project/"+marker.object;
        else
          return "red";
      }
      case "333"://Person
      {
        if(info == "link")
          return "/person/"+this.agency._id+"/"+marker.object;
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
