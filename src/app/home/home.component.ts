import { Router } from '@angular/router';
import { ProductsClient } from '../clients/products.client';
import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public products: Observable<any> = this.ProductsClient.getProductsData();
  
  constructor(
    private authenticationService: AuthenticationService,
    private ProductsClient: ProductsClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout(): void {
    this.authenticationService.logout();
  }

  Details(id : any): any {
    this.router.navigate([], {
      queryParams: {
        productId: id
      }
    })
  }

  Delete(id : any): void {
    this.ProductsClient.deleteProduct(id).subscribe(()=>{
      window.location.reload();
    })
  }
}