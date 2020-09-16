import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private route: ActivatedRoute, public restApi: ProductsService,
    private _sanitizer: DomSanitizer, private router: Router) { }
  id;
  sub
  producto = {};
  productsWithoutCurrent = [];
  product_type = "";
  currentProd={};
  currentImage=0;
  ;
  ngOnInit(): void {
    window.scroll(0,0);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.restApi.getProductByModel(this.id).subscribe((data) => {
        this.producto = data["Item"];
        // this.producto["product_img"] = this.producto["product_img"][0]!="h"?this.producto["product_img"].substring(2):this.producto["product_img"]
        this.product_type = this.producto["product_type"];
        this.currentImage = this.producto["product_img"][0];
      })
      // In a real app: dispatch action to load the details here.
    });
  }
  changeCurrentImage(index){
    this.currentImage = index;
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

  goToProductDetails() {
    this.router.navigate(['/productos/'+this.product_type]);
  }
  goToProducto() {
  }

}



