import { Component, OnInit } from '@angular/core';
import { Mechanic } from '../Mechanic';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {
   mechanics:Mechanic[];

  constructor() { 
//DISPLY MECHANIC 
this.mechanics=[new Mechanic(101,"Alex","carry",99860,5,"problem Finder"),new Mechanic(101,"Virat","Kohali",88888,2,"Fitter")];
}

  ngOnInit(): void {
  }
//Insert mechanics
  Register_Mechanic(mid,fname,lname,contact,experince,experties)
  {
      let me:Mechanic=new Mechanic(mid,fname,lname,contact,experince,experties);

       this.mechanics.push(me);

  }
  //delete mechanics
  DeleteMech(index)
   {
      this.mechanics.splice(index,1);

  }

}
