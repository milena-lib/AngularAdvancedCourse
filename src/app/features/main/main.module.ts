import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRootPageComponent } from './main-root-page/main-root-page.component';
import { ProductsMainComponent } from './pages/products-main/products-main.component';
import { MainRoutingModule } from './main-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './pages/products-main/components/product-list/product-list.component';
import { EditProductComponent } from './pages/products-main/components/edit-product/edit-product.component';
import { CalcComponent } from './components/calc/calc.component';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    MainRootPageComponent,
    SearchComponent,
    CalcComponent,
    ProductsMainComponent,
    EditProductComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ]
})
export class MainModule { }
