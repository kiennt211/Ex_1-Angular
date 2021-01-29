import { Component, Input } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public restApi: RestApiService) { }
  ngOnInit(): void {
     this.loadCost();
     this.loadInstance();
     this.loadServiceBreakdown();
  }
  title = 'ex4plus';
  show = true;
  public static Cost: any = [];
  public static instances: any = [];
  public static services: any = [];
  toggle(){
    this.show = !this.show;
    this.loadCost();
    this.loadInstance();
    this.loadServiceBreakdown();
  }
  public loadCost(){
    return this.restApi.getCost().subscribe((data: {})=>{
      AppComponent.Cost = data;
    })
  }
  public loadServiceBreakdown(){
    return this.restApi.getServiceBreakdown().subscribe((data: {})=>{
      AppComponent.services = data;
    })
  }
  public loadInstance(){
    return this.restApi.getInstances().subscribe((data: {})=>{
      AppComponent.instances = data; 
      //console.log('onInit',this.instances);
    })
  }
  
}
