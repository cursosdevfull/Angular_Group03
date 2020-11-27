import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Driver } from 'src/app/interfaces/driver.interface';
import { Medic } from 'src/app/interfaces/medic.interface';
import { DriverService } from 'src/app/services/driver.service';
import { HistoryService } from 'src/app/services/history.service';
import { MedicService } from 'src/app/services/medic.service';
import { History } from 'src/app/interfaces/history.interface';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css'],
})
export class EditHistoryComponent implements OnInit {
  id;
  history: History;
  group: FormGroup;
  subscriptionMedic: Subscription;
  subscriptionDriver: Subscription;
  listMedic: Medic[] = [];
  listDriver: Observable<Driver[]>;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly historyService: HistoryService,
    private readonly medicService: MedicService,
    private readonly driverService: DriverService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((response: any) => {
      this.id = response.params.id;
    });

    this.history = this.activatedRoute.snapshot.data.history;

    this.loadData();

    this.setForm();
  }

  loadData() {
    this.subscriptionMedic = this.medicService
      .getAll()
      .subscribe((response) => {
        this.listMedic = response;
      });
    this.listDriver = this.driverService.getAll();
  }

  setForm() {
    console.log('history', this.history);
    this.group = new FormGroup({
      dateRequest: new FormControl(
        this.history?.dateRequest,
        Validators.required
      ),
      contractor: new FormControl(
        this.history?.contractor,
        Validators.required
      ),
      authorizationCode: new FormControl(
        this.history?.authorizationCode,
        Validators.required
      ),
      policy: new FormControl(this.history?.policy, Validators.required),
      document: new FormControl(this.history?.document, Validators.required),
      name: new FormControl(this.history?.name, Validators.required),
      lastname: new FormControl(this.history?.lastName, Validators.required),
      phone: new FormControl(this.history?.phone),
      age: new FormControl(this.history?.age, Validators.required),
      typeAge: new FormControl(
        this.history ? this.history.typeAge.toString() : null,
        Validators.required
      ),
      gender: new FormControl(
        this.history ? this.history.gender.toString() : null,
        Validators.required
      ),
      address: new FormControl(this.history?.address, Validators.required),
      reference: new FormControl(this.history?.reference, Validators.required),
      diagnostic: new FormControl(
        this.history?.diagnostic,
        Validators.required
      ),
      symptoms: new FormControl(this.history?.symptoms, Validators.required),
      treatment: new FormControl(this.history?.treatment, Validators.required),
      medic: new FormControl(this.history?.medic, Validators.required),
      driver: new FormControl(this.history?.driver, Validators.required),
    });
  }

  getHistory() {
    this.historyService.getOne(this.id);
  }

  change() {
    this.router.navigate(['histories', 'edit', '5fa1f333520b2a6b78c01d94'], {
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    });
  }

  ngOnDestroy() {
    this.subscriptionMedic.unsubscribe;
  }
}
