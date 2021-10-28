import { CategoriesRoutingModule } from './categories.routing';
import { PipesModule } from './../../../pipes/pipes.module';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { NewCategoriesComponent } from './new-categories/new-categories.component';
import { MaterialModule } from './../../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    CategoriesRoutingModule

  ],
  declarations: [CategoriesComponent, NewCategoriesComponent, EditCategoriesComponent],
})
export class CategoriesModule { }
