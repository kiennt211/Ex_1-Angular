import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostOverViewComponent } from './cost-over-view/cost-over-view.component';
import { InstanceListComponent } from './instance-list/instance-list.component';

const routes: Routes = [
  { path:'', pathMatch: 'full', redirectTo: 'cost-over-view'},
  { path: 'cost-over-view', component: CostOverViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
