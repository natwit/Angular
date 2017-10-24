import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-travel',
    templateUrl: './travel.component.html',
    styleUrls: ['./travel.component.css']
  })

  export class travelComponent implements OnInit {
    private name:string[];
     private city:string[];
     private hotel:string[];
      constructor( ) { }
    
      ngOnInit() {  
        this.name = ["Khao Lak","Laem Phrom Thep"];
       this.city = ["Phang-nga","Phuket"];
       this.hotel = ["Fanari Khao LaK","Sri panwa"];
     }
    }