import { Component, OnInit } from '@angular/core';
import { KeyPad } from '../../../interfaces/keypad.interface';
import { FormMedicComponent } from '../../components/form-medic/form-medic.component';
import { UtilService } from '../../../services/util.service';
import { Observable } from 'rxjs';
import { MedicService } from '../../../services/medic.service';
import { Medic } from '../../../interfaces/medic.interface';
import { mappingMedic, MedicDto } from 'src/app/dtos/medic.dto';

@Component({
  selector: 'app-page-medic',
  templateUrl: './page-medic.component.html',
  styleUrls: ['./page-medic.component.css'],
})
export class PageMedicComponent implements OnInit {
  listKeyPad: KeyPad[] = [
    {
      tooltip: 'AGREGAR MÉDICO',
      icon: 'add',
      action: 'ADD',
    },
  ];

  dataSource = [];

  constructor(
    private readonly utils: UtilService,
    private readonly medicService: MedicService
  ) {}

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.medicService.getAll().subscribe(
      (response) => {
        this.dataSource = mappingMedic(response) as MedicDto[];
      },
      (error) => console.log(error)
    );
  }

  openForm(data: any = null): void {
    const obs: Observable<any> = this.utils.openModal(FormMedicComponent, {
      panelClass: 'modal',
      disableClose: true,
      data,
    });

    obs.subscribe((response: FormData) => {
      if (!response) {
        return false;
      }

      if (response.get('_id') && response.get('_id') !== 'null') {
        this.medicService.update(response).subscribe(() => {
          this.utils.showMessage('Registro actualizado');
          this.list();
        });
      } else {
        response.delete('_id');
        this.medicService.insert(response).subscribe(() => {
          this.utils.showMessage('Registro insertado');
          this.list();
        });
      }
    });
  }

  delete(data: Medic): void {
    this.utils
      .confirm('¿Está seguro de querer borrar?')
      .subscribe((response) => {
        if (!response) {
          return false;
        }

        this.medicService.delete(data._id).subscribe(() => {
          this.list();
        });
      });
  }

  action(actionButton: string): void {
    switch (actionButton) {
      case 'ADD':
        this.openForm();
        break;
    }
  }
}
