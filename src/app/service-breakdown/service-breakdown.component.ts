import { Component, OnInit, ɵConsole } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-service-breakdown',
  templateUrl: './service-breakdown.component.html',
  styleUrls: ['./service-breakdown.component.css']
})
export class ServiceBreakdownComponent implements OnInit {
  services : any =[];
  total: number = 0.0;
  colorMap = [{
    name : "EC2",
    color: "#0081c6"
  },
  {
    name : "EFS",
    color: "#4fab09"
  },
  {
    name : "S3",
    color: "#b31e1e"
  },
  {
    name : "Support",
    color: "#ff780c"
  },
  {
    name : "Others",
    color: "red"
  },
]
  constructor() { }
  ngOnInit(): void {
    this.services = AppComponent.services;
    for (let service of this.services){
      this.total = this.total + Number(service.cost);
      this.colorMap.forEach(function(obj) {
        if(obj.name == service.serviceType) {
          service["color"] = obj.color
        }
      })
    }
    console.log(this.services);

  }

}
