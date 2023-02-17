import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ProductFullDetails } from 'src/app/features/main/model/product.model';
import { ProductsMainStoreService } from '../../store/products-main-store.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductComponent implements OnInit, OnChanges {

  @Input() product!: ProductFullDetails;

  readonly productForm = this.fb.group({
    id: new FormControl<number>(-1),
    name: new FormControl<string>(''),
    price: new FormControl<number>(-1),
    description: new FormControl<string>(''),
    isFreeShipping: new FormControl<boolean>(false)
  })
  
  constructor(
    private readonly store: ProductsMainStoreService,
    private readonly fb: FormBuilder) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['product']) {
      this.productForm.patchValue(this.product);
    }
  }

  saveProduct() {
    this.store.updateProductDetails(this.productForm.value as ProductFullDetails)
  }

}
