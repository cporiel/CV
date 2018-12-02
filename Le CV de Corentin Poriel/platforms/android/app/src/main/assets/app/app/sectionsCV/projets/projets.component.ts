import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";




@Component({
  selector: "projets",
  moduleId: module.id,
  templateUrl: './projets.component.html',
  styleUrls: ['./css/projets.css',],
})

export class ProjetsComponent{

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
