import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  serviceName = "";
  CustomerName = "Tuka";
  Date = "";
  VehicleNumber = "";
  ServiceName = "";

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const num = this.activatedRoute.snapshot.queryParams['num'];
    alert("In Service Details"+num);
    if(num){
      console.log(num)
    }
  }
}
