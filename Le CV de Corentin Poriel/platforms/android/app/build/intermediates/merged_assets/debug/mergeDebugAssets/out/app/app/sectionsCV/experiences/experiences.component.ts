import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";




@Component({
  selector: "experiences",
  moduleId: module.id,
  templateUrl: './experiences.component.html',
  styleUrls: ['./css/experiences.css',],
})

export class ExperiencesComponent{

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
