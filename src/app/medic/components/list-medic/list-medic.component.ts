import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';
import { MedicDto } from '../../../dtos/medic.dto';
import metaDataListMedicsJSON from '../../../../assets/jsons/metadata-medics.json';

@Component({
  selector: 'app-list-medic',
  templateUrl: './list-medic.component.html',
  styleUrls: ['./list-medic.component.css'],
})
export class ListMedicComponent implements OnInit {
  @Output() onEditMedic = new EventEmitter();
  @Input() dataSource: MedicDto[] = [];

  metaDataListMedics: MetaDataTableItem[] = metaDataListMedicsJSON;

  constructor() {}

  ngOnInit(): void {}

  action(actionButton: string, data: MedicDto): void {
    switch (actionButton) {
      case 'EDITAR':
        this.onEditMedic.emit(data);
        break;
      case 'ELIMINAR':
        break;
    }
  }

  openForm(): void {}
}
