import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private route: ActivatedRoute, public restApi: ProductsService,
    private _sanitizer: DomSanitizer, private router: Router) { }
  id;
  sub
  products = [];
  modelTypes = [];
  currentProd={};
  ;
  ngOnInit(): void {
    window.scroll(0,0);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['cat']; // (+) converts string 'id' to a number
      this.restApi.getAllProducts().subscribe((data) => {
        this.products = [];
        this.modelTypes = [];
        for (var i = 0; i < data['Items'].length; i++) {
          if (data['Items'][i]["product_type"]["S"] == this.id) {
            this.products.push({
              "type": data['Items'][i]["product_type"]["S"],
              "model": data['Items'][i]["product_model"]["S"],
              "img": data['Items'][i]["product_img"]["L"],
              "desc": data['Items'][i]["product_desc"]["S"],
              "modelType": data['Items'][i]["product_model_type"]["S"],
              "name": data['Items'][i]["product_name"]["S"]
            })

          }

        }

        this.products.forEach((item) => {
          var validator = this.modelTypes.find(element => element.name == item.modelType);
          if( validator == null || undefined){
            this.modelTypes.push(
              {
                "name":item.modelType,
                "prods":this.products.filter(i => item.modelType == i.modelType)
              }
            );
          }
        })

        this.products = this.products.sort(this.compare)
        this.currentProd = this.products[0];


      })
      // In a real app: dispatch action to load the details here.
    });
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

  selectCurrentProd(model) {

    this.router.navigate(['/producto', model]);
  }
  goToProductDetails() {
    this.router.navigate(['/categorias']);
    window.scroll(0,0);
    this.goToProducto()
  }
  goToProducto() {
  }

}

