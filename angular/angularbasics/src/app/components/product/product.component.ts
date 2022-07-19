import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod:Product={
    code:-1,
    name:'',
    desc:'',
    manu:'',
    price:-1
  }
  products:Product[]=[]
  constructor() { }

  ngOnInit(): void {
  }

  addProduct():void{
    let prodnew ={
      code:this.prod.code,
    name:this.prod.name,
    desc:this.prod.desc,
    manu:this.prod.manu,
    price:this.prod.price
    } 
    this.products.push(prodnew)
    console.log("products ",this.products)
    this.clearData()
  }

  clearData():void{
    this.prod={
      code:-1,
    name:'',
    desc:'',
    manu:'',
    price:-1

    }   
  }

}
