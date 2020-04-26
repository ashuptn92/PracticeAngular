import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditemsinshopComponent } from './additemsinshop/additemsinshop.component';
import { BakeryitemlistComponent } from './bakeryitemlist/bakeryitemlist.component';
import { HttpClientModule } from '@angular/common/http'; 
import { DataTableModule } from 'angular-datatable';

@NgModule({
  declarations: [
    AppComponent,
    AdditemsinshopComponent,
    BakeryitemlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
