import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavGeneralDataComponent } from './nav-general-data/nav-general-data.component';
import { NavFinancialValuesComponent } from './nav-financial-values/nav-financial-values.component';
import { BigMacIndexComponent } from './big-mac-index/big-mac-index.component';
import { WorldBankDataComponent } from './world-bank-data/world-bank-data.component';

const routes: Routes = [
  {
    path:'general', component:NavGeneralDataComponent
  },
  {
    path:'finance', component:NavFinancialValuesComponent
  },
  { 
    path: '', redirectTo: '/general', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
