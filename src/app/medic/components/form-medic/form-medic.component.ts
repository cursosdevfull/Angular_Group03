import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LocationService } from '../../../services/location.service';
import { LocationDto, mappingLocation } from '../../../dtos/location.dto';

@Component({
  selector: 'app-form-medic',
  templateUrl: './form-medic.component.html',
  styleUrls: ['./form-medic.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormMedicComponent implements OnInit {
  title: string;
  group: FormGroup;
  selectedFile: File;
  listLocations: LocationDto | LocationDto[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly reference: MatDialogRef<FormMedicComponent>,
    private readonly locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService
      .getAll()
      .subscribe((data) => (this.listLocations = mappingLocation(data)));
    this.group = new FormGroup({
      _id: new FormControl(this.data?._id),
      name: new FormControl(this.data?.name, Validators.required),
      surname: new FormControl(this.data?.surname, Validators.required),
      lastname: new FormControl(this.data?.lastname, Validators.required),
      cmp: new FormControl(this.data?.cmp, Validators.required),
      dni: new FormControl(this.data?.dni, Validators.required),
      email: new FormControl(this.data?.email, [
        Validators.required,
        Validators.email,
      ]),
      locations: new FormControl(this.data?.locations.map((el) => el._id)),
    });
    this.title = this.data ? 'Edición' : 'Nuevo';
  }

  save(): void {
    const values = this.group.getRawValue();

    const fd: FormData = new FormData();
    // tslint:disable-next-line: forin
    for (const property in values) {
      fd.append(property, values[property]);
    }

    if (this.selectedFile) {
      fd.append('photo', this.selectedFile);
    }

    this.reference.close(fd);
  }

  updloadFile(file: File): void {
    this.selectedFile = file;
  }
}
