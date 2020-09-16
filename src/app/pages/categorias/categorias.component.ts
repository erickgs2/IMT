import { Component, OnInit } from '@angular/core';
import * as Rellax from 'rellax';
import { ProductsService } from '../../services/products.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {


  data : Date = new Date();
  focus;
  focus1;
  focus2;
  focus3;

  products = [];
  prodTypes = [];



  constructor(public restApi: ProductsService,
    private _sanitizer: DomSanitizer,
    private router: Router) { }

  ngOnInit() {
    window.scroll(0,0);
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
            "img":data['Items'][i]["product_img"]["L"],
            "desc":data['Items'][i]["product_desc"]["S"],
            "name":data['Items'][i]["product_name"]["S"]
          })
          // this._sanitizer.bypassSecurityTrustUrl()
          var validator = this.prodTypes.find(element => element.name == this.products[i].type);
          if( (validator == null || undefined)){
            this.prodTypes.push(
              {
                "name":this.products[i].type,
                "img":this.products[i].img[0]["S"]
              }
            );
          }else if(validator.img.includes("samsung")){ 
           this.prodTypes.forEach(element => {
             if(element.name == validator.name){
              element.img = this.products[i].img[0]["S"]
             }
           }); 
          }
          
      }
      this.prodTypes = this.prodTypes.sort(this.compare)
      
    })

  }

  goToProductDetails(cat) {
    this.router.navigate(['/productos', cat]);
  }

  compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const bandA = a.name.toUpperCase();
    const bandB = b.name.toUpperCase();
  
    let comparison = 0;
    if (bandA > bandB) {
      comparison = 1;
    } else if (bandA < bandB) {
      comparison = -1;
    }
    return comparison;
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }


}
