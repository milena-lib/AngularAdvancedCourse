import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsMainStoreService } from './store/products-main-store.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  readonly products$ = this.store.filterProducts$;
  readonly productFreeShippingOnly$ = this.store.productFreeShippingOnly$;

  readonly selectedProduct$ = this.store.selectedProduct$;
  readonly isBusy$ = this.store.isBusy$;

  readonly freeshippingControl = new FormControl<boolean>(false);

  constructor(private readonly store: ProductsMainStoreService) { }

  ngOnInit(): void {
    this.store.loadProducts();

    this.freeshippingControl.valueChanges.subscribe(p => this.store.setFilter(p!));
  }

}
