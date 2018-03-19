export class Person {

  id: number;
  name: string;
  firstname: string;
  role: string;
  mail: string;
  password: string;

  constructor(id, name, firstname, role) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.role = role;
    this.mail = "test@hotmail.fr";
    this.password = "admin";
  }

}
