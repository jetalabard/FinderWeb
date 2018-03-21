import {Serializable} from "./serializable";

export class Person extends Serializable {

  _id: string;
  isSuperAdmin: boolean;
  name: string;
  firstname: string;
  email: string;
  username: string;
  password: string;
  poles: string[];
  projects: string[];
  __v: string;

  constructor() {
    super();
  }

}
