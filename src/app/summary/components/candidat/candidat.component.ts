import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css'],
})
export class CandidatComponent implements OnInit {
  view: number[] = [600, 400];
  results = [];

  scheme = {
    domain: ['#0d47a1', '#42a5f5', '#90caf9'],
  };

  legend = true;
  legendPosition = 'right';
  legendTitle = 'Vaccums';

  gradient = true;

  doughnut = true;

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.listen('dataupdate').subscribe((results: []) => {
      this.results = results.map((el, ind) => {
        return { name: `Vaccum ${ind + 1}`, value: el };
      });
    });
  }
}
