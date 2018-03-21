import { Component, OnInit } from '@angular/core';
import {Pole} from "../models/pole";
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../models/project";
import {AgencyService} from "../services/agency.service";
import {PoleService} from "../services/pole.service";
import {ProjectService} from "../services/project.service";

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {

  agency: Agency = new Agency();
  pole: Pole = new Pole();
  projects: Project[] = [];
  selectedProjectId: number;
  emptyProjects: boolean = true;

  constructor(private projectService : ProjectService, private poleService : PoleService, private agencyService : AgencyService, private rout : Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.getAgencyAndPoleAndProjects(params.idAgency, params.idPole));
  }


  getAgencyAndPoleAndProjects(idAgency, idPole)
  {
    this.agencyService.get(idAgency)
      .subscribe(
        dataA => {
          this.agency.fillFromJson(JSON.parse(dataA.toString()));
          this.poleService.get(idPole)
            .subscribe(
              dataP => {
                this.pole.fillFromJson(JSON.parse(dataP.toString()));
                this.pole.projects = ['1','2'];
                for(let idProject of this.pole.projects)
                {
                  this.projectService.get(idProject)
                    .subscribe(
                      dataP => {
                        let project: Project = new Project();
                        project.fillFromJson(JSON.parse(dataP.toString()))
                        this.projects.push(project);
                        this.emptyProjects = false;
                      },
                      error => {
                        console.log("error");
                      }
                    );
                }
                this.changeSelectedProject(this.projects[0]._id);

              },
              error => {
                console.log("error");
              }
            );

        },
        error => {
          console.log("error");
        }
      );
  }


  changeSelectedProject(id)
  {
    this.selectedProjectId = id;
  }

  getStyle(id)
  {
    if(id == this.selectedProjectId)
      return "#ccd5f1";
    else
      return "white";
  }

}
