import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ExportService } from 'src/app/services/export.service';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css'],
})
export class ExportComponent implements OnInit {
  constructor(
    private readonly matIconRegistry: MatIconRegistry,
    private readonly domSanitizer: DomSanitizer,
    private readonly exportService: ExportService,
    @Inject(MAT_BOTTOM_SHEET_DATA) private data
  ) {
    this.matIconRegistry.addSvgIcon(
      'excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/excel.svg'
      )
    );

    this.matIconRegistry.addSvgIcon(
      'pdf',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/icons/pdf.svg'
      )
    );
  }

  ngOnInit(): void {}

  exportTo(evt: any, type: string) {
    evt.preventDefault();
    this.exportService.exportToExcel(this.data, 'Médics', 'Médic');
  }
}
