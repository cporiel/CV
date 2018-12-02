import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./sectionsCV/home/home.component";
import { ExperiencesComponent } from "./sectionsCV/experiences/experiences.component";
import { ProjetsComponent } from "./sectionsCV/projets/projets.component";
import { LoisirsComponent } from "./sectionsCV/loisirs/loisirs.component";
import { ContactComponent } from "./sectionsCV/contact/contact.component";
import { FormationComponent } from "./sectionsCV/formation/formation.component";


export const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "home", component: HomeComponent},
  { path: "experiences", component: ExperiencesComponent},
  { path: "projets", component: ProjetsComponent},
  { path: "loisirs", component: LoisirsComponent},
  { path: "contact", component: ContactComponent},
  { path: "formation", component: FormationComponent}
];

export const navigatableComponents = [
  HomeComponent,
  ExperiencesComponent,
  ProjetsComponent,
  LoisirsComponent,
  ContactComponent,
  FormationComponent
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
