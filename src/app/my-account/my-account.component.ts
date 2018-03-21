import { Component, OnInit } from '@angular/core';
import {Person} from "../models/person";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  person: Person = new Person();
  oldPassword: string = "";
  newPassword: string = "";
  newPasswordConfirm: string = "";
  newMail: string = this.person.email;
  message: string = "";
  colorMessage: string = "red";



  constructor() { }

  ngOnInit() {
  }

  save()
  {
    console.log("save");
    if(this.isValidMail(this.newMail))
    {
      if(this.isValidPassword(this.oldPassword, this.newPassword, this.newPasswordConfirm))
      {
        //TODO mettre à jour person
        this.message = "Données mises à jour";
        this.colorMessage = "green";
        this.clearPasswords();
        return;
      }
    }

    this.colorMessage = "red";
    this.clearPasswords();

    console.log("message : "+this.message);
  }

  cancel()
  {
    console.log("cancel");
    this.clearPasswords();
    this.newMail = this.person.email;
    this.message = "Modifications annulées";
    this.colorMessage = "blue";
    console.log("message : "+this.message);
  }

  clearPasswords()
  {
    this.oldPassword = "";
    this.newPassword = "";
    this.newPasswordConfirm = "";
  }

  isValidMail(mail)
  {
    if(1) //TODO check mail
      return true;

    this.message = "Mail non valide";
    return false;

  }

  isValidPassword(oldP, newP, newPConfirm)
  {
    if(oldP == this.person.password)
      if(newP == newPConfirm)
        if(newP.length >= 2)
          return true;
        else
          this.message = "Le mot de passe dois contenir plus d'un caractère";
      else
        this.message = "Le champs confirmation doit être le même que le champ nouveau";
    else
      this.message = "L'ancien mot de passe est incorrect";

    return false;
  }

}
