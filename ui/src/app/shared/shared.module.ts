import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchBarComponent } from './search/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { DetailsComponent } from './details/details.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SearchBarComponent,
    SpinnerComponent,
    DetailsComponent,
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    NavbarComponent,
    SearchBarComponent,
    SpinnerComponent,
    DetailsComponent,
    ScrollTopComponent
  ],
})
export class SharedModule { }
