import { Injectable, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get('https://i8z1xzz9cf.execute-api.us-east-1.amazonaws.com/Development/get-all-products');
  }
}
