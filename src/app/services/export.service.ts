import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { environment } from 'src/environments/environment';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  exportToPDF(content: any[], title: string, output: string) {
    const informationFormatted = this.getInformation(content, title);
    switch (output) {
      case 'open':
        pdfMake.createPdf(informationFormatted).open();
        break;
      case 'download':
        pdfMake.createPdf(informationFormatted).download();
        break;
      case 'print':
        pdfMake.createPdf(informationFormatted).print();
        break;
    }
  }

  private getInformation(content: any[], title: string) {
    const data = {
      content: [
        {
          text: title,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20],
        },
        {
          text: 'Datos de médicos',
          style: 'header',
        },
        {
          columns: [],
        },
      ],
      styles: {
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: 'underline',
        },
      },
    };

    this.addItems(content, data);

    return data;
  }

  private addItems(content: any[], data: any) {
    content.forEach((el) => {
      const photo: any = [
        {
          text: 'Photo medic',
        },
      ];

      const items: any = [];
      items.push({
        text: `${el.name} ${el.surname} ${el.lastname}`,
      });
      items.push({
        text: `DNI: ${el.dni}`,
      });
      items.push({
        text: `CMP: ${el.cmp}`,
      });

      const columns = [photo, items];

      data.content.push({
        columns,
      });

      data.content.push({
        text: '  ',
        margin: [0, 0, 0, 10],
      });
    });
  }
}
