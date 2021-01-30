import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { InstanceListComponent } from './instance-list/instance-list.component';
import { CostOverViewComponent } from './cost-over-view/cost-over-view.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { ServiceBreakdownComponent } from './service-breakdown/service-breakdown.component';
import { PiechartComponent } from './piechart/piechart.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    InstanceListComponent,
    CostOverViewComponent,
    BarChartComponent,
    ServiceBreakdownComponent,
    PiechartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleChartsModule,
    FlexLayoutModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
