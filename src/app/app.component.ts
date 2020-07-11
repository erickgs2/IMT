import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ProductsService } from './services/products.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;

    products = [];
    prodTypes = [];

    constructor(private _sanitizer: DomSanitizer, public restApi: ProductsService, private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                var _location = this.location.path();
                _location = _location.split('/')[2];

                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });


        this.restApi.getAllProducts().subscribe((data)=>{
            this.products =[];
            for (var i=0; i<data['Items'].length; i++) {
              
              this.products.push({
                  "type":data['Items'][i]["product_type"]["S"],
                  "model":data['Items'][i]["product_model"]["S"],
                  "img":this._sanitizer.bypassSecurityTrustUrl(data['Items'][i]["product_img"]["S"]),
                  "desc":data['Items'][i]["product_desc"]["S"],
                  "name":data['Items'][i]["product_name"]["S"]
                })
      
                var validator = this.prodTypes.find(element => element.name == this.products[i].type);
                if( validator == null || undefined){
                  this.prodTypes.push(
                    {
                      "name":this.products[i].type,
                      "img":this.products[i].img
                    }
                  );
                }

                
            }
            
            this.prodTypes = this.prodTypes.sort(this.compare)
            
          })
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
}
