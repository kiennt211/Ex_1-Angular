import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { InstanceListComponent } from '../instance-list/instance-list.component';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  instances: any =[];
  constructor(public restApi: RestApiService) { 
  }
  ngOnInit(): void {
    this.instances = AppComponent.instances;
    for(let instance of this.instances){
      this.data.push([instance.instanceType, instance.onDemandHours]);
    }
  }
   title = 'Instance';
   type =  'BarChart';
   data = [];
   columnNames =['InstanceType', 'Hours']
   options = {};
   width = 550;
   height: number = 400;
}
