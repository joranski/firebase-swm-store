import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from "@angular/forms";
//import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SwmService {

  nav: AngularFireList<[]> = null; //  list of objects

  site = {
    url: 'https://www.southwestmedical.test',
    uuid: 'fa1bb591-b50e-4af3-aec4-2043916deef9',
    proxy_url: 'cloud function url',
    proxy_session: false,
  }

  constructor(private fb: AngularFireDatabase, private http: HttpClient) { }

  loadOrders(limit: number, start: number) {
    if(!limit) limit = 10;
    if(!start) start = 0;
    return this.http.get(this.site.url+'/data/order?uuid='+this.site.uuid+'&limit='+limit+'&start='+start);
  }

  loadCustomers(limit: number, start: number) {
    if(!limit) limit = 10;
    if(!start) start = 0;
    return this.http.get(this.site.url+'/data/account?uuid='+this.site.uuid+'&limit='+limit+'&start='+start);
  }

  getNav(): AngularFireList<[]>  {
    this.nav = this.fb.list('/nav/data/');
    return this.nav;
  }

  getOldNav(){
    // go get nav from firebase RT
    // checktimestamp
        // dump RT
    
    return this.http.get(this.site.url+'/api/nav?uuid='+this.site.uuid);
    // store data into RT
    // Use
  }

  getCategory(nCatID: number, nPage: number){
    if(!nCatID) return false;
    if(!nPage) nPage = 0;
    return this.http.get(this.site.url+'/api/category?uuid='+this.site.uuid+'&category_id='+nCatID+'&nPage='+nPage);
  }

  getProduct(nProdID: number){
    if(!nProdID) return false;
    return this.http.get(this.site.url+'/api/product?uuid='+this.site.uuid+'&product_id='+nProdID);
  }
}