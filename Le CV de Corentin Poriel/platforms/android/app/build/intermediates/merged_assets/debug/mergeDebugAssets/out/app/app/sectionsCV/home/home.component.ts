import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import {AnimationCurve} from "tns-core-modules/ui/enums";
import {Animation, AnimationDefinition, Pair} from "tns-core-modules/ui/animation";
import { GestureEventData } from "tns-core-modules/ui/gestures";
import { SwipeGestureEventData } from "tns-core-modules/ui/gestures";
import { Router } from "@angular/router";
import { Page } from 'tns-core-modules/ui/page';
import { Color } from 'tns-core-modules/color'
import { View } from 'tns-core-modules/ui/core/view'



@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./css/home.css',],
})

export class HomeComponent implements OnInit{
  private menuOuvert=true;
  @ViewChild('menuContainer') menuContainer: ElementRef;
  @ViewChild('photoContainer') photoContainer: ElementRef;
  @ViewChild('infosContainer') infosContainer: ElementRef;

  constructor(private router: Router, private page: Page,  private routerExtensions: RouterExtensions){

  }

  public ngOnInit(){
    const menuContainer = <View>this.menuContainer.nativeElement;
    const infosContainer = <View>this.infosContainer.nativeElement;
    menuContainer.translateX = -100;
    infosContainer.translateX = -45;
  }

  public afficherMenuGauche(){
    const menuContainer = <View>this.menuContainer.nativeElement;
    const photoContainer = <View>this.photoContainer.nativeElement;
    const infosContainer = <View>this.infosContainer.nativeElement;

    if(this.menuOuvert){
      var anims = new Array();
      anims.push({ target: photoContainer, scale: { x: 0.75, y: 0.75 }, duration: 500 });
      anims.push({ target: menuContainer, translate: { x: 0, y: 0 }, duration: 500 });
      anims.push({ target: infosContainer, translate: { x: 5, y: 0 }, duration: 500 });
      var playSequentially = false;
      var animationSet = new Animation(anims, false);
      animationSet.play()
    }else{
      var anims = new Array();
      anims.push({ target: photoContainer, scale: { x: 1, y: 1 }, duration: 500 });
      anims.push({ target: menuContainer, translate: { x: -100, y: 0 }, duration: 500 });
      anims.push({ target: infosContainer, translate: { x: -45, y: 0 }, duration: 500 });
      var playSequentially = false;
      var animationSet = new Animation(anims, false);
      animationSet.play()
    }
    this.menuOuvert= !this.menuOuvert;
  }

  public naviguerVers(page){
    this.routerExtensions.navigate([page], {
      transition: {
        name: "flip"
      }
    });
  }

}
