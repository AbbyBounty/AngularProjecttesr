import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorregistraionComponent } from './vendorregistraion/vendorregistraion.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { ActiveOrderComponent } from './active-order/active-order.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';

const routes: Routes = [
 {path:'order-history',component:OrderHistoryComponent},
 {path:'services',component:AvailableServicesComponent},
 {path:'dashboard',component:DashboardComponent},
 {path:'vendorregister',component:VendorregistraionComponent},
  { path: 'service-add', component: ServiceAddComponent },
  { path: 'active-order', component: ActiveOrderComponent },
  {path:'service-details',component: ServiceDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
