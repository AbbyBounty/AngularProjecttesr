import { Component, OnInit } from '@angular/core';
import { vendorreg } from '../vendorregistration';

@Component({
  selector: 'app-vendorregistraion',
  templateUrl: './vendorregistraion.component.html',
  styleUrls: ['./vendorregistraion.component.css']
})
export class VendorregistraionComponent implements OnInit {

        v:vendorreg[];
        vendorid=null;
        firstname=" ";
        lastname=" ";
        vendoradd=" ";
        shopname=" ";
        mobile=null;
        email=" ";
        password=null;
        licensenumber=null;
        vendoryear=null;

  constructor() {
   
    this.v=[new vendorreg(1,"brock","Lesner","Miami Florida","Paul Works",15263738,"brock@gmail.com",123,2244,2000),
           new vendorreg(2,"steve","Austin","south avenue Texas","Austin Workstation",23454567,"steve@gmail.com",456,9911,2001),
           new vendorreg(2,"Shawn","Michaels","mount eve Kentucky","shawn garage",23545236,"shawn@gmail.com",543,9844,2002)];

}
   

  ngOnInit(): void {
  }

  insertVendordetails(vid,fname,lname,add,sname,mnumber,em,pwd,lnumber,est)
  {
  
    let m:vendorreg=new vendorreg(vid,fname,lname,add,sname,mnumber,em,pwd,lnumber,est);
     this.v.push(m);
  }

  deleteVendorDetails(idx)
  {
    this.v.splice(idx,1);
  }



}
