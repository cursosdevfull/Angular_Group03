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
import { KeyPad } from 'src/app/interfaces/keypad.interface';

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

  currentPage: number = 0;
  totalRecords: number = 0;

  metaDataListHistories: MetaDataTableItem[] = metaDataListHistoriesJSON;

  listKeyPad: KeyPad[] = [
    {
      tooltip: 'AGREGAR HISTORIA',
      icon: 'add',
      action: 'ADD',
      color: 'primary',
    },
  ];

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

  actionKeyPad(actionButton: string): void {
    switch (actionButton) {
      case 'ADD':
        this.router.navigate(['new'], {
          relativeTo: this.activatedRoute,
        });
        break;
    }
  }

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
