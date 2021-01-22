import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';

import { InstanceListComponent } from './instance-list/instance-list.component';
import { CostOverViewComponent } from './cost-over-view/cost-over-view.component';



@NgModule({
  declarations: [
    AppComponent,
    InstanceListComponent,
    CostOverViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
