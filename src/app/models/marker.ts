export class Marker {

  id: number;
  name: string;
  x: number;
  y: number;
  idLink: number;

  constructor(id, name, x, y, idLink = -1)
  {
    this.id = id;
    this.name = name;
    this.x = x;
    this.y = y;
    this.idLink = idLink;
  }


}
