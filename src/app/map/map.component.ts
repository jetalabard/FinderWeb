import {Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {forEach} from "@angular/router/src/utils/collection";
import {Agency} from "../models/agency";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  agencies: Agency[] = [];

  constructor() { }

  addAgencies()
  {
    this.agencies.push(new Agency(1,"Sopra Steria","Clermont-Ferrand",45.5,3));
    this.agencies.push(new Agency(2,"Sopra Steria","Nantes",47,0));
    this.agencies.push(new Agency(3,"CGI","Clermont-Ferrand",45,3));
    this.agencies.push(new Agency(4,"Capgemini","Clermont-Ferrand",46,3));
    this.agencies.push(new Agency(5,"Capgemini","Nantes",47.5,0.01));
  }


  ngOnInit() {
    this.addAgencies();
    let mapProp = {
      center: new google.maps.LatLng(47, 0),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      fullscreenControl: false,
      streetViewControl: false,
      zoomControl: false,
      minZoom: 2
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    this.addMarkers();
  }

  addMarkers()
  {
    for (let a of this.agencies)
    {
      let marker = new google.maps.Marker({
        position: {lat: a.lat, lng: a.long},
        map: this.map,
        title: a.companyName
      });
      let infowindow = new google.maps.InfoWindow({
        content: a.companyName
      });
      marker.addListener('click', function () {
        infowindow.open(this.map, marker);
      });
    }
  }

}
