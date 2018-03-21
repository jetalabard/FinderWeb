import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mail: string;
  public password: string;
  message: string ="";

  constructor(private auth : AuthService, private rout : Router) { }

  ngOnInit() {
    console.log("checkIsLog");
    if(this.auth.isLogged())
      this.rout.navigate(['/map']);
  }

  login()
  {
    console.log("tryLog");

    this.auth.login(this.mail, this.password)
      .subscribe(
        data => {
          this.rout.navigate(['/map']);
          console.log("log ok");
        },
        error => {
          this.message = JSON.parse(error.error)['message'];
        }
      );
  }

}
