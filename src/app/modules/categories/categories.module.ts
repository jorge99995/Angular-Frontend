import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { CategorieAddComponent } from './categorie-add/categorie-add.component';
import { CategorieEditComponent } from './categorie-edit/categorie-edit.component';
import { CategorieDeleteComponent } from './categorie-delete/categorie-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategorieListComponent,
    CategorieAddComponent,
    CategorieEditComponent,
    CategorieDeleteComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
  ]
})
export class CategoriesModule { }
