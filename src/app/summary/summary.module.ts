import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { PageSummaryComponent } from './pages/page-summary/page-summary.component';
import { SharedModule } from '../shared/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GraphicCovidComponent } from './components/graphic-covid/graphic-covid.component';
import { CandidatComponent } from './components/candidat/candidat.component';
import { CovidApiComponent } from './components/covid-api/covid-api.component';

@NgModule({
  declarations: [PageSummaryComponent, GraphicCovidComponent, CandidatComponent, CovidApiComponent],
  imports: [CommonModule, SummaryRoutingModule, SharedModule, NgxChartsModule],
})
export class SummaryModule {}
