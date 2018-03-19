import {Marker} from "./marker";

export class Stage {

  id: number;
  name: string;
  picture: string;
  markers: Marker[] = [];


  constructor(id, name)
  {
    this.id = id;
    this.name = name;
    this.picture = "https://s-i.huffpost.com/gen/606390/thumbs/o-BUREAU-SARKOZY-570.jpg?1";
  }


}



