import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  constructor() {}

  exportToExcel(content: any[], title: string, name: string) {
    const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(content);
    const book: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(book, sheet, title);
    XLSX.writeFile(book, `${name}.xlsx`);
  }
}
