import { Component, OnInit } from '@angular/core';
import { Service } from '../Service/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  services =[

   { "id":1	,"Service Name":"Full body service",	"Price":1200},
   { "id":2	,"Service Name":"Oil Change",	"Price":1200},
   { "id":3	,"Service Name":"Washing",	"Price":1200},
   { "id":4	,"Service Name":"Air",	"Price":1200}

  ];
//  service:any={ };
  constructor( private router: Router) {
  
  }
  ngOnInit(): void {
    
  }

  addService(){
    
  }

  onEdit(service) {
    this.router.navigate(['/service-add'], {queryParams: {id: service['id']}})
  }
addservice() {
    this.router.navigate(['/service-add'])
  }

}
