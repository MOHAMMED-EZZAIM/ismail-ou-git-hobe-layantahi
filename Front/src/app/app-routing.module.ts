import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./view/navbar/navbar.component";
  import {AppartemetComponent} from "./view/appartemet/creat-appartement/appartemet.component";
import {CategoriesAppartementComponent} from "./view/categoriesAappartement/categoriesAppartement.component";
import {PropAppartementComponent} from "./view/propAppartement/propAppartement-list.component";
import {ListAppartemetComponent} from "./view/appartemet/list-appartemet/list-appartemet.component";
const routes: Routes = [
  {path:"",component:NavbarComponent},
  {path:"propritaire",component:PropAppartementComponent},
  {path:"categpories",component:CategoriesAppartementComponent},
  {path:"appartement",component:AppartemetComponent},
  {path:"listComponent",component:ListAppartemetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
