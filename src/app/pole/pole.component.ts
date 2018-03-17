import { Component, OnInit } from '@angular/core';
import {Pole} from "../models/pole";
import {AuthService} from "../services/auth.service";
import {Agency} from "../models/agency";
import {Router} from "@angular/router";
import {Project} from "../models/project";

@Component({
  selector: 'app-pole',
  templateUrl: './pole.component.html',
  styleUrls: ['./pole.component.css']
})
export class PoleComponent implements OnInit {

  agency: Agency;
  pole: Pole;
  projects: Project[] = [];
  selectedProjectId: number;
  constructor(private auth : AuthService, private rout : Router) { }


  addAgencyPoleProjects()
  {
    this.agency = new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3);
    this.pole = new Pole(1,"RH","desc1");

    this.projects.push(new Project(1,"Limagrain"));
    this.projects.push(new Project(2,"Inserm"));
    this.projects.push(new Project(3,"Michelin"));
    this.projects.push(new Project(4,"PSA"));

  }

  ngOnInit() {
    this.addAgencyPoleProjects();
    this.changeSelectedProject(this.projects[0].id);
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
