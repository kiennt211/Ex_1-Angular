import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-service-breakdown',
  templateUrl: './service-breakdown.component.html',
  styleUrls: ['./service-breakdown.component.css']
})
export class ServiceBreakdownComponent implements OnInit {
  services : any =[];
  total: number = 0.0;
  constructor() { }
  ngOnInit(): void {
    this.services = AppComponent.services;
    console.log(this.services);
    for (let service of this.services){
      this.total = this.total + Number(service.cost);
    }
  }

}
