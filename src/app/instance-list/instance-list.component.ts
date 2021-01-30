import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Instance } from '../shared/instance';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-instance-list',
  templateUrl: './instance-list.component.html',
  styleUrls: ['./instance-list.component.scss']
})
export class InstanceListComponent implements OnInit {
  instances: any= [];
  constructor(public restApi: RestApiService) { }
  ngOnInit(): void {
    this.instances = AppComponent.instances;
  }
}
