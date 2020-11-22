import { DatePipe } from '@angular/common';
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
  providers: [DatePipe],
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() dataSource = [];
  @Input() metaDataTable: MetaDataTableItem[] = [];
  @Input() paginator: MatPaginator;
  @Input() lazyLoad: boolean = false;
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;
  @ContentChildren(MatColumnDef) columnsDef: QueryList<MatColumnDef>;
  listFields = [];

  dataTable: any;

  constructor(private datePipe: DatePipe) {
    // this.datePipe = new DatePipe('es-PE');
  }

  ngOnInit(): void {
    this.listFields = this.metaDataTable.map((item) => item.field);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSource && !changes.dataSource.firstChange) {
      this.dataTable = new MatTableDataSource<any>(this.dataSource);
    }
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
    if (this.paginator && !this.lazyLoad) {
      this.dataTable.paginator = this.paginator;
      this.paginator.firstPage();
    }
    this.columnsDef.forEach((columnDef) => this.table.addColumnDef(columnDef));
    if (this.columnsDef.length) {
      this.listFields.push('actions');
    }
  }

  applyPipe(value: string, metadata: any) {
    if (metadata.pipe) {
      switch (metadata.pipe.name) {
        case 'date':
          return this.datePipe.transform(value, metadata.pipe.format);
      }
    } else {
      return value;
    }
  }
}
