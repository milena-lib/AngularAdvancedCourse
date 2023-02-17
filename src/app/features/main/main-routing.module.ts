import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainRootPageComponent } from './main-root-page/main-root-page.component';
import { ProductsMainComponent } from './pages/products-main/products-main.component';

const routes: Routes = [{
    path: '', component: MainRootPageComponent, children: [
        { path: 'products', component: ProductsMainComponent }
    ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]  
})
export class MainRoutingModule { }
