import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as email from "nativescript-email";
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "contact",
  moduleId: module.id,
  templateUrl: './contact.component.html',
  styleUrls: ['./css/contact.css'],
})

export class ContactComponent{
  public nom;
  public prenom;
  private message;
  private compteur=0;

  constructor(private router: Router, private routerExtensions: RouterExtensions){

  }

  public naviguerVers(page){
    this.routerExtensions.navigate([page], {
      transition: {
        name: "flip"
      }
    });
  }
}
