import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  activeOrders=[
    {	"Order Id":161,"Customer Name":"steve",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Full body service"},
    {	"Order Id":112,"Customer Name":"john",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Oil Change"},
    {	"Order Id":3313,"Customer Name":"will",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Air"},
    {	"Order Id":124,"Customer Name":"kane",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Washing"},
    {	"Order Id":155,"Customer Name":"tim",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Full body service"},
    {	"Order Id":111,"Customer Name":"paulo",	"Date":"12/12/1994",	"Vehicle Number":"MH12LH2967","Service Name":"Oil Change"}
  ]
showActiveOrders(){
  
}
}
