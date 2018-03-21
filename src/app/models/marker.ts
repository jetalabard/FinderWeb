import {Serializable} from "./serializable";

export class Marker extends Serializable{

  _id: string;
  name: string;
  type: string;
  posX: number;
  posY: number;
  object: string;

  constructor()
  {
    super();
  }


}
