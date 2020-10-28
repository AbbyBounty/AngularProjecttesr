import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { VendorregistraionComponent } from './vendorregistraion/vendorregistraion.component';
import { FormsModule } from '@angular/forms';
=======
import { AvailableServicesComponent } from './available-services/available-services.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 1e0697ed539afe85a75c63b37bb9d63ba5828ef7

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    VendorregistraionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
=======
    AvailableServicesComponent,
    OrderHistoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
>>>>>>> 1e0697ed539afe85a75c63b37bb9d63ba5828ef7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
