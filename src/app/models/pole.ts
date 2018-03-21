import {Serializable} from "./serializable";

export class Pole extends Serializable{

  _id: string;
  administeredBy: string[];
  name: string;
  description: string;
  photo: string;
  projects: string[];
  __v: string;

  constructor()
  {
    super();
  }

}
