import {Serializable} from "./serializable";

export class Project extends Serializable{

  _id: number;
  name: string;
  photo: string;
  collaborator: string[];
  persons: string[];

  constructor()
  {
    super();
  }

}
