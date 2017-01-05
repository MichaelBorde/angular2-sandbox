import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sb-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Output() modalClosed = new EventEmitter();

  constructor() {
  }

  @Input() set title(value) {
    this.titleValue = value;
  }

  @Input() set visible(value) {
    this.visibleValue = value;
  }

  onModalClosed() {
    this.modalClosed.emit();
  }
}
