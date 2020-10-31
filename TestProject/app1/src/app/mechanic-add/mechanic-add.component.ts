import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mechanic-add',
  templateUrl: './mechanic-add.component.html',
  styleUrls: ['./mechanic-add.component.css']
})
export class MechanicAddComponent implements OnInit {

 
  
    service = null;
    /*description = ``
    price = 0
    serviceName = ``*/

   // Mechanic_Id=0
  Mechanic_First_Name= ''
Mechanic_Last_Name= ''
Mechanic_Contact_No=0
Mechanic_Experince=0
Mechanic_Experties=''

    
    constructor(private activatedRoute: ActivatedRoute) { }
  
    ngOnInit(): void {
      const id = this.activatedRoute.snapshot.queryParams['id']
      if(id){
        console.log(id)
      }
  
     
    }
    onUpdate() {
  
    }
  }

  