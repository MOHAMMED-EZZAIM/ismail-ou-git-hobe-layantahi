import {Component, OnInit} from '@angular/core';
import {CategoriesAppartement} from "../../shared/model/appartementModel/categories-appartement.model";
import {CategoriesAppartementService} from "../../shared/service/categories-appartement.service";
import { Router } from '@angular/router';
import {AppartementService} from "../../shared/service/appartement.service";

@Component({
  selector: 'app-list',
  templateUrl: './categoriesAppartement.component.html',
  styleUrl: './categoriesAppartement.component.css'
})
export class CategoriesAppartementComponent implements  OnInit{

  public _ok:boolean=false;

  public  propUpdate!:CategoriesAppartement;

  constructor(public _categoriesAppartementService :CategoriesAppartementService,public  _appartementService:AppartementService,private router:Router) {
  }

  public save() {
    this._categoriesAppartementService.save().subscribe({
      next:response => {
        console.log(response)
        if (response === -1) {
        } else if (response === -2) {
        } else if (response === -3) {
        } else if (response === 1) {
          this._ok = true
          setTimeout(() => {
            this._ok = false;
          }, 10000);

          this.getAll();
        }
      },
      error: (err) => {
       console.log(err)
      }
    });
  }


  public  getAll(){
    this._categoriesAppartementService.getAll().subscribe({
      next:data =>{
        this.items=data
        console.log(data.map(value => value.libelle))
      },
      error:err => {
        console.log(err)
      }
    })
  }


  public  getAppartemetsbyLibelle(libelle:String){
    this._appartementService.getAppartemetsbyLibelle(libelle).subscribe({
      next:data=>{
       this._categoriesAppartementService._appartemetsByCategories=data
        this.router.navigateByUrl("/listComponent")

      },
      error:err => {
        console.log(err)
      }
    })
  }
  public  delete(libelle:String){
    this._categoriesAppartementService.delete(libelle).subscribe({
      next:() => {
        this.getAll();
      },
      error:(err: any) => {
        console.log(err)
      }
    })
  }


  public  update():any{
    return this._categoriesAppartementService.update(this.propUpdate).subscribe({
      next:()=>{
        this.getAll();
      },
      error:()=>{

      }

    })

  }



  get item(): CategoriesAppartement {
    return this._categoriesAppartementService.item;
  }

  set item(value: CategoriesAppartement) {
    this._categoriesAppartementService.item = value;
  }


  get items(): Array<CategoriesAppartement> {
    return this._categoriesAppartementService._items;
  }

  set items(value: Array<CategoriesAppartement>) {
    this._categoriesAppartementService._items = value;
  }




  ngOnInit(): void {
    this.getAll();
  }

}
