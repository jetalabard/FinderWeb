import { Component, OnInit } from '@angular/core';
import { AuthService} from "../services/auth.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private auth : AuthService) { }

  isLogged: boolean = false;

  ngOnInit() {
    if(this.auth.isLogged())
      this.isLogged = true;
  }

}
