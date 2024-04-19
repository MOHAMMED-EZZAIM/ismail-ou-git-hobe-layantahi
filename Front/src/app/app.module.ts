import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClient, HttpClientModule, withFetch} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NavbarComponent } from './view/navbar/navbar.component';
import { AppartemetComponent } from './view/appartemet/creat-appartement/appartemet.component';
import { CategoriesAppartementComponent } from './view/categoriesAappartement/categoriesAppartement.component';
import {PropAppartementService} from "./shared/service/propAppartement.service";
import {PropAppartementComponent} from "./view/propAppartement/propAppartement-list.component";
import { ListAppartemetComponent } from './view/appartemet/list-appartemet/list-appartemet.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppartemetComponent,
    CategoriesAppartementComponent,
    ListAppartemetComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PropAppartementComponent,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
