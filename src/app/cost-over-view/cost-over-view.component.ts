import { Component,OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-cost-over-view',
  templateUrl: './cost-over-view.component.html',
  styleUrls: ['./cost-over-view.component.scss']
})
export class CostOverViewComponent implements OnInit {
  Cost: any = [];
  constructor(public restApi: RestApiService) { }
  ngOnInit(): void {
    this.Cost = AppComponent.Cost;
    console.log(this.Cost);
  }
}
