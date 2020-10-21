import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

// tslint:disable-next-line: no-string-literal
FileList.prototype['forEach'] = (callback: any) => {
  [].forEach.call(this, callback);
};

@Directive({
  selector: '[appUpload]',
})
export class UploadDirective {
  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUploadedFiles: EventEmitter<FileList> = new EventEmitter<
    FileList
  >();
  @Input() fileTypeAccept = '';

  constructor() {}

  @HostListener('dragover', ['$event']) arrastre(evt): void {
    evt.preventDefault();
    this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) fuera(evt): void {
    evt.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) soltar(evt): void {
    evt.preventDefault();
    this.onHover.emit(false);

    this.onUploadedFiles.emit(evt.dataTransfer.files);
  }
}
