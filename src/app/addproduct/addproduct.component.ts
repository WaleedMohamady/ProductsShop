import { ProductsClient } from '../clients/products.client';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  public addingProductForm!: FormGroup;

  productId : any;

  constructor(private ProductsClient: ProductsClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.addingProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required]),
      imageURL: new FormControl('', Validators.required),
    });
    this.route.queryParamMap.subscribe((map)=>{
      this.productId = map.get("productId");
      this.ProductsClient.getProductDetails(this.productId).subscribe((value) => {
        this.addingProductForm.patchValue(value);
      });
    })
  }

  public onAddSubmit() {
    this.ProductsClient.addProduct(
      this.addingProductForm.get('name')!.value,
      this.addingProductForm.get('description')!.value,
      this.addingProductForm.get('price')!.value,
      this.addingProductForm!.get('imageURL')!.value
    ).subscribe(() => {
      this.addingProductForm.reset();
      window.location = window.location.pathname as any;
    })
  }

  public onEditSubmit() {
    this.ProductsClient.updateProduct(
      this.productId,
      this.addingProductForm.get('name')!.value,
      this.addingProductForm.get('description')!.value,
      this.addingProductForm.get('price')!.value,
      this.addingProductForm!.get('imageURL')!.value
    ).subscribe(() => {
      this.addingProductForm.reset();
      window.location = window.location.pathname as any;
    })
  }

}