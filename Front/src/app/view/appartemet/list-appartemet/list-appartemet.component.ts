import { Component } from '@angular/core';
import {CategoriesAppartementService} from "../../../shared/service/categories-appartement.service";
import {Appartement} from "../../../shared/model/appartementModel/appartement.model";
import {PropAppartementService} from "../../../shared/service/propAppartement.service";

@Component({
  selector: 'app-list-appartemet',
  templateUrl: './list-appartemet.component.html',
  styleUrl: './list-appartemet.component.css'
})
export class ListAppartemetComponent {
  constructor(private categoriesSrervice:CategoriesAppartementService,private proprtaire:PropAppartementService) {
  }

  get appartemetsByCategories(): Array<Appartement> {
    return this.categoriesSrervice.appartemetsByCategories;
  }
  public  affaich(){
 console.log(this.appartemetsByCin)

  }

  set appartemetsByCategories(value: Array<Appartement>) {
    this.categoriesSrervice.appartemetsByCategories = value;
  }

  get appartemetsByCin(): Array<Appartement> {
    return this.proprtaire.appartemetsByCin;
  }

  set appartemetsByCin(value: Array<Appartement>) {
    this.proprtaire.appartemetsByCin = value;
  }

}
