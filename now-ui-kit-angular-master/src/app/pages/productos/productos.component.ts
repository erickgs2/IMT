import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  data : Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;

  products = [];
  prodTypes = [];


  constructor(public restApi: ProductsService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.restApi.getAllProducts().subscribe((data)=>{
      this.products =[];
      for (var i=0; i<data['Items'].length; i++) {
        
        this.products.push({
            "type":data['Items'][i]["product_type"]["S"],
            "model":data['Items'][i]["product_model"]["S"],
            "img":data['Items'][i]["product_img"]["S"],
            "desc":data['Items'][i]["product_desc"]["S"],
            "name":data['Items'][i]["product_name"]["S"]
          })

          var validator = this.prodTypes.find(element => element == this.products[i].type);
          if( validator == null || undefined){
            this.prodTypes.push(this.products[i].type);
          }
          
      }
      
      
    })

  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}

