import { Component, OnInit } from '@angular/core';
import { Covid } from 'src/app/interfaces/covid.interface';
import { CovidApiService } from 'src/app/services/covid-api.service';

@Component({
  selector: 'app-covid-api',
  templateUrl: './covid-api.component.html',
  styleUrls: ['./covid-api.component.css'],
})
export class CovidApiComponent implements OnInit {
  view: number[] = [700, 400];

  dataCovid = [];

  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9'],
  };

  gradient = true;

  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = 'Países';
  yAxisLabel = 'Cantidad de contagiados';

  legend = true;
  legendPosition = 'right';
  legendTitle = 'Meses';

  showGridLines = true;

  constructor(private readonly covidApiService: CovidApiService) {}

  ngOnInit(): void {
    this.covidApiService.getAll().subscribe((data: Covid[]) => {
      this.dataCovid = data.map((el: Covid) => {
        return { name: el.countryRegion, value: el.confirmed };
      });
    });
  }
}
