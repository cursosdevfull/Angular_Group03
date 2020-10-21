import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('contenido') contenido: ElementRef;
  @ViewChild('inputFile') inputFile;
  @Output() selectedFile = new EventEmitter();
  @Input() photo: string;
  withHover = false;
  pathImage: string;

  constructor() {
    /*   this.pathImage = `https://angular03.cursos-dev.com/photos/${this.photo}`; */
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.pathImage);
    this.contenido.nativeElement.style.backgroundImage = `url('${this.pathImage}')`;
  }

  onUpload(): void {
    this.inputFile.nativeElement.click();
  }

  addFile(file: File): void {
    this.readFile(file);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const image = changes.photo.currentValue;
    const pathImage = `https://angular03.cursos-dev.com/photos/${image}`;

    setTimeout(() => {
      this.contenido.nativeElement.style.backgroundImage = `url('${pathImage}')`;
    });
  }

  filesSelected(list: FileList): void {
    this.readFile(list[0]);
  }

  readFile(file: File): void {
    this.selectedFile.emit(file);
    const fr = new FileReader();
    fr.onloadend = (response) => {
      const data = (response.target as FileReader).result;
      this.contenido.nativeElement.style.backgroundImage = `url('${data}')`;
    };

    fr.readAsDataURL(file);
  }
}
