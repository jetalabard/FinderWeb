export class Agency {

  id: number;
  companyName: string;
  city: string;
  logo: string = "https://logomarts.files.wordpress.com/2015/07/logo-example2.jpg";
  lat: number;
  long: number;
  poles: number[];

  constructor(id, companyName, city, lat, long)
  {
    this.id = id;
    this.companyName = companyName;
    this.city = city;
    //this.logo = logo;
    this.lat = lat;
    this.long = long;
    this.poles = [1,2,3,4];
  }

}