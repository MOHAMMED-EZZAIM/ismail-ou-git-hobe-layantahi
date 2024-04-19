import {Component, OnInit} from '@angular/core';
import {AppartementService} from "../../../shared/service/appartement.service";
import {Appartement} from "../../../shared/model/appartementModel/appartement.model";
import {CategoriesAppartementService} from "../../../shared/service/categories-appartement.service";
import {CategoriesAppartement} from "../../../shared/model/appartementModel/categories-appartement.model";
import {PropAppartementService} from "../../../shared/service/propAppartement.service";
import {PropAppartement} from "../../../shared/model/appartementModel/propAppartemenet.model";

@Component({
  selector: 'app-appartemet',
  templateUrl: './appartemet.component.html',
  styleUrl: './appartemet.component.css'
})
export class AppartemetComponent implements  OnInit{

  public _ok:boolean=false;

  public  propUpdate!:Appartement;

  public  categorits : CategoriesAppartement[]=[]

  public  categoriesString: string[]=[]

 public selectedCategory: string="";

  public  propAppartements! :PropAppartement[]

  public  propString : string[]=[]
  public  selectedProp :string=""
  constructor(public _service :AppartementService,public categorieService:CategoriesAppartementService,public  propAppartement:PropAppartementService) {
  }

  public save() {
    this.item.categoriesAppartementDto.libelle=this.selectedCategory
    this.item.propAppartemenetDto.cin=this.selectedProp
    this.service.save().subscribe({

      next: (response) => {

        console.log(response)
        if (response === -1) {

        } else if (response === -2) {
          console.log("mohammed l3z!!")
        } else if (response === -3) {
          // Traitement pour le cas où l'enregistrement a échoué avec le code -3
        } else if (response === 1) {

          this._ok = true
          setTimeout(() => {
            this._ok = false; // Hide the notification after 5 seconds
          }, 10000);

          this.getAll();

        }
      },
      error: (err) => {
        // Gérer les erreurs
      }
    });
  }


  public  getAll(){
    this._service.getAll().subscribe({
      next:data=>{
        this.items=data
      },
      error:err => {
        console.log(err)
      }
    })
  }


  public  getCategoriesLibelle(){
    this.categorieService.getAll().subscribe(
      {
        next:data=>{
          this.categorits=data
          this.categorits.map(c=>{
            this.categoriesString.push(c.libelle.toString())
          })
        }
      }
    )
  }

  public  getPropCin(){
    this.propAppartement.getAll().subscribe(
      {
        next:data=>{
          this.propAppartements=data
          this.propAppartements.map(c=>{
            this.propString.push(c.cin.toString())
          })
        }
      }
    )
  }


  public  delete(cin:string){
    this._service.delete(cin).subscribe({
      next:value => {
        this.getAll();
      },
      error:err => {
        console.log(err)
      }
    })
  }

  public  update():any{
    return this._service.update(this.propUpdate).subscribe({
      next:()=>{
        this.getAll();
      },
      error:()=>{

      }

    })

  }



  get item(): Appartement {
    return this._service.item;
  }

  set item(value: Appartement) {
    this._service.item = value;
  }

  get items(): Array<Appartement> {
    return this._service._items;
  }

  set items(value: Array<Appartement>) {
    this._service._items = value;
  }


  get service(): AppartementService {
    return this._service;
  }

  set service(value: AppartementService) {
    this._service = value;
  }

  ngOnInit(): void {
    console.log(this.items.map(value => console.log(value)))
    this.getAll();
    this.getCategoriesLibelle();
    this.getPropCin();
  }
}
