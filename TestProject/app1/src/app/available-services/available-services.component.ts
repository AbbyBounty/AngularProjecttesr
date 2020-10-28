import { Component, OnInit } from '@angular/core';
import { Service } from '../Service/service';

@Component({
  selector: 'app-available-services',
  templateUrl: './available-services.component.html',
  styleUrls: ['./available-services.component.css']
})
export class AvailableServicesComponent implements OnInit {

  services: Service[];
//  service:any={ };
  constructor() {
    this.services = [new Service(1, "Oil Change", 100),
      new Service(2, "Air", 10),
      new Service(3, "Chain Grissing", 100),
      new Service(4, "Washing", 300)]
  }
  ngOnInit(): void {
    
  }

}
