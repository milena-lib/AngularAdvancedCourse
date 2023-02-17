import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/features/main/model/product.model';
import { ProductsMainStoreService } from '../../store/products-main-store.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  @Input() products!: Product[];
  readonly dataSource = new MatTableDataSource<Product>();
  readonly displayedColumns = ['id', 'name', 'price'];
  readonly selectedId$ = this.store.selectedProductId$;
  readonly loadingProductId$ = this.store.loadingProductId$;
  
  constructor(private readonly store: ProductsMainStoreService) { }


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['products']) {
      this.dataSource.data = this.products;
    }
  }

  setSelectedProduct(product: Product) {
    this.store.setSelectedProduct(product.id);
  }

}
