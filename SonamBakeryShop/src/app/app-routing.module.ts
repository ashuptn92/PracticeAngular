import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdditemsinshopComponent } from './additemsinshop/additemsinshop.component';
import { BakeryitemlistComponent } from './bakeryitemlist/bakeryitemlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },  
  { path: 'view-items', component: BakeryitemlistComponent },
  { path: 'add-items', component: AdditemsinshopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
