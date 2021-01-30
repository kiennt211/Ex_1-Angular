import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ServiceBreakdownComponent } from '../service-breakdown/service-breakdown.component';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  services: any=[];
  constructor(public restApi: RestApiService) { }
  total: number = 0.0;

  ngOnInit(): void {
    this.CalcTotal();
    this.services = AppComponent.services;
    for(let service of this.services){
      this.data.push([service.serviceType, Number(service.cost)/this.total*100]);
    }
    console.log(this.data);
  }
  CalcTotal(): void{
    var serv: any=[];
    serv = AppComponent.services;
    for(let service of serv){
      this.total = this.total + Number(service.cost);
    }
  }
  type =  'PieChart';
  data = [];
  options = { colors: ['#0081c6', '#4fab09', '#b31e1e', '#ff780c', '#d6ac01'], pieHole: 0.5};
  width = 550;
  height = 250;
  legend = false;
}
