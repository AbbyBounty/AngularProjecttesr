import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VendorregistraionComponent } from './vendorregistraion/vendorregistraion.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from "@angular/common";
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ServiceAddComponent } from './service-add/service-add.component';
import { AvailableServicesComponent } from './available-services/available-services.component';
import { ActiveOrderComponent } from './active-order/active-order.component';

@NgModule({
  declarations: [
    AppComponent,
    VendorregistraionComponent,
    OrderHistoryComponent,
    ServiceAddComponent,
    AvailableServicesComponent,
    ServiceAddComponent,
    ActiveOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
