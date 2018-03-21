import {Component, OnInit, ViewChild} from '@angular/core';
import { } from '@types/googlemaps';
import {Agency} from "../models/agency";
import {AgencyService} from "../services/agency.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  agencies: Agency[] = [];

  constructor(private agencyService: AgencyService) { }


  ngOnInit() {

    this.getAllAgencies();

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
  }

  addMarkers()
  {
    for (let a of this.agencies)
    {
      let marker = new google.maps.Marker({
        position: {lat: a.latitude, lng: a.longitude},
        map: this.map,
        title: a.name
      });
      let infowindow = new google.maps.InfoWindow({
        content: a.name
      });
      marker.addListener('click', function () {
        infowindow.open(this.map, marker);
      });
    }
  }

  getAllAgencies()
  {
    this.agencyService.getAll()
      .subscribe(
        data => {
          let agency: Agency = new Agency();
         this.agencies = agency.getArrayObjFromJson(data);
          this.addMarkers();
        },
        error => {
          console.log("error");
        }
      );
  }


}
