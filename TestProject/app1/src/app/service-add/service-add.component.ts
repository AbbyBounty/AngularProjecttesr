import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-add',
  templateUrl: './service-add.component.html',
  styleUrls: ['./service-add.component.css']
})
export class ServiceAddComponent implements OnInit {

  service=0;
  description = ``
  price=0
  serviceName=``
  constructor() { }

  ngOnInit(): void {
  }
  onUpdate(){

  }
}
