import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mechanic } from '../Mechanic';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  mechanics =[

    { "Mechanic_Id":1	,"Mechanic_First_Name":"Guddu","Mechanic_Last_Name":"Pandit"	,"Mechanic_Contact_No":8888,"Mechanic_Experince":12,"Mechanic_Experties":"Modifier"},
    {"Mechanic_Id":2	,"Mechanic_First_Name":"Akhndanand","Mechanic_Last_Name":"Tripathi"	,"Mechanic_Contact_No":7777,"Mechanic_Experince":10,"Mechanic_Experties":"Servicing"},
    {"Mechanic_Id":3	,"Mechanic_First_Name":"Munna","Mechanic_Last_Name":"Tripathi"	,"Mechanic_Contact_No":8888,"Mechanic_Experince":5,"Mechanic_Experties":"Fitter"},
    { "Mechanic_Id":4	,"Mechanic_First_Name":"Golu","Mechanic_Last_Name":"Pandey"	,"Mechanic_Contact_No":9999,"Mechanic_Experince":17,"Mechanic_Experties":"Helper"}
    ];
  





  constructor(private router: Router) { 

}

  ngOnInit(): void {
  }

  
  onEdit(mechanic)
  {
    this.router.navigate(['/mechanic-add'],{queryParams:{id:mechanic['Mechanic_Id']}})
  }
  addmechanic() {
    this.router.navigate(['/mechanic-add'])
  }

}
