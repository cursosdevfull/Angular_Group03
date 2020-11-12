import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';
import { MedicDto } from '../../../dtos/medic.dto';
import metaDataListMedicsJSON from '../../../../assets/jsons/metadata-medics.json';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  @Output() onEditMedic = new EventEmitter();
  @Output() onDeleteMedic = new EventEmitter();
  @Input() dataSource: MedicDto[] = [];
  @ViewChild(MatPaginator, { static: true }) matPaginator: MatPaginator;

  metaDataListMedics: MetaDataTableItem[] = metaDataListMedicsJSON;

  constructor() {}

  ngOnInit(): void {}

  action(actionButton: string, data: MedicDto): void {
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
