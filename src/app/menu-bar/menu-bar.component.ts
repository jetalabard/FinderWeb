import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private auth : AuthService, private rout : Router) { }

  ngOnInit() {
  }

  logout()
  {
    this.auth.logout()
      .subscribe(
        data => {
          this.rout.navigate(['/login']);
          console.log("logout ok");
        },
        error => {
          localStorage.removeItem('currentUser');
          console.log("currentUser removed from error");
          this.rout.navigate(['/login']);
        }
      );
  }

  isLogged()
  {
    if(this.auth.isLogged())
      return true;
    else
      return false;
  }

}
