import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnChanges,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {
  MatColumnDef,
  MatTable,
  MatTableDataSource,
} from '@angular/material/table';
import { MetaDataTableItem } from '../../../interfaces/metadata-table-item.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() dataSource = [];
  @Input() metaDataTable: MetaDataTableItem[] = [];
  @Input() paginator: MatPaginator;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef) columnsDef: QueryList<MatColumnDef>;
  listFields = [];

  dataTable: any;

  constructor() {}

  ngOnInit(): void {
    this.listFields = this.metaDataTable.map((item) => item.field);
  }

  ngOnChanges(changes: SimpleChanges): void {
    /*     if (changes.metaDataTable && !changes.metaDataTable.firstChange) {
      this.listFields = this.metaDataTable.map((item) => item.field);
    } */
  }

  action(row: any): void {
    console.log(row);
  }

  ngAfterContentInit(): void {
    // console.log('paginador', this.paginator);
    this.dataTable = new MatTableDataSource<any>(this.dataSource);
    if (this.paginator) {
      this.dataTable.paginator = this.paginator;
      this.paginator.firstPage();
    }
    this.columnsDef.forEach((columnDef) => this.table.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }
}
