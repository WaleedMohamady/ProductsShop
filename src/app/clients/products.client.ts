import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsClient {
  constructor(private http: HttpClient) {}

  //Get All Products
  getProductsData(): Observable<any> {
    return this.http.get(environment.apiUrl + 'api/Products');
  }

  //Get Product By Id
  getProductDetails(productId:any): Observable<any> {
    return this.http.get(environment.apiUrl + 'api/Products/' + productId)
  }

  //Add Product
  addProduct(
    name: string,
    description: string,
    price: number,
    imageURL: string
  ): Observable<any> {
    return this.http.post(
      environment.apiUrl + 'api/Products',
      {
        name: name,
        description: description,
        price: price,
        imageURL: imageURL,
      },
    );
  }

  //Update Product
  updateProduct(
    id: any,
    name: string,
    description: string,
    price: number,
    imageURL: string
  ): Observable<any> {
    return this.http.put(environment.apiUrl + 'api/Products/' + id, {
      id: id,
      name: name,
      description: description,
      price: price,
      imageURL: imageURL,
    },
    );
  }

  //Delete Product
  deleteProduct(id: any): Observable<any> {
    return this.http.delete(environment.apiUrl + 'api/Products/' + id)
  }
}