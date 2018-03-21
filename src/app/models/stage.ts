import {Marker} from "./marker";
import {Serializable} from "./serializable";

export class Stage extends Serializable{

  _id: string;
  name: string;
  photo: string;
  __v: string;
  markers: string[];


  objectMarkers: Marker[] = [];


  constructor()
  {
    super();
  }


}



