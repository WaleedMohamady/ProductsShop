import { ProductsClient } from '../clients/products.client';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {
  Productdata: any;
  constructor(
    private ProductsClient: ProductsClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe((map)=>{
      let productId = map.get("productId");
      this.ProductsClient.getProductDetails(productId).subscribe((value) => {
        this.Productdata = value;
      });
    })
  }
}
