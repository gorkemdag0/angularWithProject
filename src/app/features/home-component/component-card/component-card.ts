import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-card',
  imports: [],
  templateUrl: './component-card.html',
  styleUrls: ['./component-card.css'],
  standalone: true,
})
export class ComponentCard {
  @Input() title:string=''
  @Input() miktar:string=''
  @Input() oran:string=''
  @Input() zaman:string=''
  @Input() ikon:string=''

  @Output() cardClicked = new EventEmitter<string>();

  onButtonClick() {
    console.log('Card tıklandı:', this.title);
    this.cardClicked.emit(this.title); // Parent'a veri gönder
  }
}
