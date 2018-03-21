

export class Serializable {

  constructor()
  {

  }

  fillFromJson(json: JSON)
  {
    for (var propName in json)
      (<any>this)[propName] = json[propName]
  }

  getArrayObjFromJson(jsonArray: any)
  {
    let objArray = [];
    let jsonObj = JSON.parse(jsonArray);
    for (let json of jsonObj)
    {
      let tmpObj = new (<any>this.constructor);
      tmpObj.fillFromJson(json)
      objArray.push(tmpObj);
    }

    return objArray;
  }

}
