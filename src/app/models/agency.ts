import {Stage} from "./stage";
import {Serializable} from "./serializable";
import {Pole} from "./pole";


export class Agency extends Serializable {


  _id: string = undefined;
  name: string = undefined;
  fonction: string = undefined;
  intitule: string = undefined;
  photo: string = undefined;
  panorama: string = undefined;
  logo: string = "assets/images/soprasteria.jpeg";
  latitude: number = 45.8;
  longitude: number = 3.1;
  country: string = undefined;
  city: string = "Clermont-Ferrand";
  administeredBy: string[] = undefined;
  poles: string[] = undefined;
  plans: string[] = undefined;
  __v: string = undefined;


  objectStages: Stage[] = [];
  objectPoles: Pole[] = [];


  constructor()
  {
    super();
  }


}
