import { MaterialModule } from './../../../shared/material/material.module';
import { NewProductComponent } from './new-product/new-product.component';
import { PipesModule } from './../../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products.routing.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [ProductsComponent, NewProductComponent]
})
export class ProductsModule { }
