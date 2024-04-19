import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {PropAppartement} from "../model/appartementModel/propAppartemenet.model";
import {Appartement} from "../model/appartementModel/appartement.model";

@Injectable({
  providedIn: 'root'
})
export class PropAppartementService {
  get appartemetsByCin(): Array<Appartement> {
    return this._appartemetsByCin;
  }

  set appartemetsByCin(value: Array<Appartement>) {
    this._appartemetsByCin = value;
  }

  public _item: PropAppartement = new PropAppartement();
  public _items:Array<PropAppartement>=new Array<PropAppartement>();
  _appartemetsByCin: Array<Appartement>=new Array<Appartement>();



  constructor(private http: HttpClient) { }

  public save(): Observable<any> {
    return this.http.post<number>("http://localhost:8081/api/propAppartement/", this.item);
  }

  public getAll():Observable<Array<PropAppartement>>{
    return this.http.get<Array<PropAppartement>>("http://localhost:8081/api/propAppartement/");
  }

  public delete(cin:string):Observable<any>{
    return this.http.delete<number>(`http://localhost:8081/api/propAppartement/cin/${cin}`);
  }


  public  update(propritaire:PropAppartement):Observable<any>{
    return this.http.put("http://localhost:8081/api/propAppartement/",propritaire)

  }


  get item(): PropAppartement {
    return this._item;
  }

  set item(value: PropAppartement) {
    this._item = value;
  }

  get items(): Array<PropAppartement> {
    return this._items;
  }

  set items(value: Array<PropAppartement>) {
    this._items = value;
  }
}
