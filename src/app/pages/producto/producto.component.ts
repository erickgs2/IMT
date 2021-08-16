import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service'
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import desc from '../../../assets/CategoryDescription.json';

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
  currentProd = {};
  currentImage = 0;
  product_mode_type = "";
  model_type_description = "";
  specs = [{ spec: "", unit: "", value: [{key:'',val:''}] }];
  ngOnInit(): void {
    window.scroll(0, 0);

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.restApi.getProductByModel(this.id).subscribe((data) => {
        this.producto = data["Item"];
        // this.producto["product_img"] = this.producto["product_img"][0]!="h"?this.producto["product_img"].substring(2):this.producto["product_img"]
        this.specs = this.producto["product_specs"]!=undefined?this.producto["product_specs"]:[{ spec: "", unit: "", value: [{key:'',val:''}] }];
        this.product_type = this.producto["product_type"];
        this.product_mode_type = this.producto["product_model_type"];
        this.currentImage = this.producto["product_img"][0];
        

        switch(this.product_mode_type){
          case "ACAMADORA (CON O SIN FERTILIZADORA)":
            this.model_type_description = desc.Acamadora
            break;
          case "ACOLCHADORAS":
            this.model_type_description = desc.Acolchadora
            break;
          case "COMEDEROS":
            this.model_type_description = desc.Comederos
            break;
          case "CUCHILLA TERRACERA":
            this.model_type_description = desc["Cuchillas Terraceras"]
            break;
          case "MULTICULTIVADORES AJUSTABLES":
            this.model_type_description = desc["Multicultivadores"]
            break;
          case "CULTIVADORAS ROTATIVAS DE ARAÑAS Y DISCOS DENTADOS":
            this.model_type_description = desc["Cultivadoras Rotativas de Discos Dentados o arañas"]
            break;
          case "NIVELADORAS HIDRÁULICAS":
            this.model_type_description = desc["Niveladoras Hidráulicas"]
            break;
          case "PLUMAS":
            this.model_type_description = desc["Plumas de Levante Hidráulicas"]
            break;
          case "PRENSA GANADERA":
            this.model_type_description = desc["Prensa Ganadera"]
            break;
          case "REMOLQUES CAMA ALTA":
            this.model_type_description = desc["Remolques Cama Alta"]
            break;
          case "REMOLQUES CAMA BAJA":
            this.model_type_description = desc["Remolques Cama Baja"]
            break;
          case "REMOLQUES CON TANQUE NODRIZA":
            this.model_type_description = desc["Remolque con Tanque Nodriza"]
            break;
          case "REMOLQUES GANADEROS":
            this.model_type_description = desc["Remolques Ganaderos"]
            break;
          case "ZANJEADOR FIJO":
            this.model_type_description = desc["Zanjeadores Fijos"]
            break;
            case "ZANJEADORES TELESCÓPICOS":
              this.model_type_description = desc["Zanjeadores Telescópicos"]
            break;
        }
      })
      // In a real app: dispatch action to load the details here.
    });
  }
  changeCurrentImage(index) {
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
    this.router.navigate(['/productos/' + this.product_type]);
  }
  goToProducto() {
  }

}



