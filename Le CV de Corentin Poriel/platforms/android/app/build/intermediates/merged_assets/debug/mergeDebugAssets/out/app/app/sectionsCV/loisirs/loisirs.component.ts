import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import { Router } from "@angular/router";
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color'
import { View } from 'tns-core-modules/ui/core/view'
import { RouterExtensions } from "nativescript-angular/router";


@Component({
  selector: "loisirs",
  moduleId: module.id,
  templateUrl: './loisirs.component.html',
  styleUrls: ['./css/loisirs.css',],
})


export class LoisirsComponent{
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
