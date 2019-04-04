import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn:"root"
})
export class CartService {

  items=[];

  constructor(
    private http:HttpClient,
  ) { }


  add(item){
    this.items.push(item);
  }

  getItems(){
    return this.items;
  }

  clean()
  {
    this.items=[];
    return this.items;
  }
  
  getShippingPrices(){
    return this.http.get('/assets/shipping.json')
  }


}