import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  constructor() { }
  serviceId: number;
  serviceName: string;
  price: number;
  ngOnInit(): void {
    this.serviceId = 101;
    this.serviceName = "Oil Change";
    this.price = 100;
  }

}
