import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HistoryDto } from 'src/app/dtos/history.dto';
import { MetaDataTableItem } from 'src/app/interfaces/metadata-table-item.interface';
import metaDataListHistoriesJSON from '../../../../assets/jsons/metadata-histories.json';
import { HistoryService } from 'src/app/services/history.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  @Output() onEditMedic = new EventEmitter();
  @Output() onDeleteMedic = new EventEmitter();
  dataSource: any = [];
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  fullName = 'serGIo HIDalgO';

  texto =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sapiente ratione dolorum ullam minus sed voluptatibus quis, ducimus nihil. Facere reiciendis voluptate delectus distinctio dolore porro expedita magnam veniam ut?';

  currentDate = new Date();

  currentPage: number = 0;
  totalRecords: number = 0;

  metaDataListHistories: MetaDataTableItem[] = metaDataListHistoriesJSON;

  constructor(
    private readonly historyService: HistoryService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listByPage();
  }

  action(actionButton: string, data: HistoryDto): void {
    switch (actionButton) {
      case 'EDITAR':
        //this.router.navigate(['histories', 'edit', data._id]);
        this.router.navigate(['edit', data._id], {
          relativeTo: this.activatedRoute,
          queryParams: { title: 'medic', app: 'ambulance' },
          fragment: 'admin',
        });
        break;
      case 'ELIMINAR':
        this.onDeleteMedic.emit(data);
        break;
    }
  }

  openForm(): void {}

  ngAfterViewInit() {
    this.matPaginator.page.subscribe((status) => {
      this.currentPage = status.pageIndex;
      this.listByPage();
    });
  }

  listByPage() {
    this.historyService.getByPage(this.currentPage).subscribe((data) => {
      this.totalRecords = data.total;
      this.dataSource = data.items;
    });
  }
}
