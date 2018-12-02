import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";




@Component({
  selector: "formation",
  moduleId: module.id,
  templateUrl: './formation.component.html',
  styleUrls: ['./css/formation.css'],
})

export class FormationComponent{

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
