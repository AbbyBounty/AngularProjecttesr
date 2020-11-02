import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css'],
})
export class ServiceDetailsComponent implements OnInit {
  CustomerName = 'Tuka';
  Date = '';
  VehicleNumber = '';
  Amount = '';
  OrderDate = ' ';
  Description = '';
  serviceName = '';
  ServiceId = '';
  activeOrders = [
    {
      'ServiceId': 161,
      'ServiceName': 'Full body service',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 112,
      'ServiceName': 'Oil Change',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 3313,
      'ServiceName': 'Air',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 124,
      'ServiceName': 'Washing',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 155,
      'ServiceName': 'Full body service',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
    {
      'ServiceId': 111,
      'ServiceName': 'Oil Change',
      'Description': 'xxxxxxxxxxxxxx',
      'Amount': 2399
    },
  ];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const num = this.activatedRoute.snapshot.queryParams['num'];
    alert('In Service Details' + num);
    if (num) {
      console.log(num);
    }
  }
}
