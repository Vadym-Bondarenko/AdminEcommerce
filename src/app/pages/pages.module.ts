import { MainPageComponent } from './main-page/main-page.component';
import { ProductsModule } from './main-page/products/products.module';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,

   ],
  declarations: [MainPageComponent]
})
export class PagesModule { }
