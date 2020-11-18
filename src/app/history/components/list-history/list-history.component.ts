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

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  @Output() onEditMedic = new EventEmitter();
  @Output() onDeleteMedic = new EventEmitter();
  @Input() dataSource: HistoryDto[] = [];
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  action(actionButton: string, data: HistoryDto): void {
    switch (actionButton) {
      case 'EDITAR':
        this.onEditMedic.emit(data);
        break;
      case 'ELIMINAR':
        this.onDeleteMedic.emit(data);
        break;
    }
  }

  openForm(): void {}
}
