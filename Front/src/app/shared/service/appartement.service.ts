import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Appartement} from "../model/appartementModel/appartement.model";

@Injectable({
  providedIn: 'root'
})
export class AppartementService {

 public _item: Appartement = new Appartement();
 public _items:Array<Appartement>=new Array<Appartement>();



  constructor(private http: HttpClient) {

  }

  public save(): Observable<any> {
    return this.http.post<number>("http://localhost:8081/api/appartement/", this.item);
  }

  public getAll():Observable<Array<Appartement>>{
    return this.http.get<Array<Appartement>>("http://localhost:8081/api/appartement/");
  }

  public delete(code:String):Observable<any>{
    return this.http.delete<number>(`http://localhost:8081/api/appartement/code/${code}`);
  }


  public  getAppartemetsbyLibelle(libelle:String):Observable<any>{
    return this.http.get(`http://localhost:8081/api/appartement/listAppartementCategories/${libelle}`);
  }


  public  getAppartemetsCin(cin:String):Observable<any>{
    return this.http.get(`http://localhost:8081/api/appartement/listAppartementCin/${cin}`);
  }


  public  update(propritaire:Appartement):Observable<any>{
    return this.http.put("http://localhost:8081/api/appartement/",propritaire)

  }


  get items(): Array<Appartement> {
    return this._items;
  }

  set items(value: Array<Appartement>) {
    this._items = value;
  }

  get item(): Appartement {
    return this._item;
  }

  set item(value: Appartement) {
    this._item = value;
  }


}
