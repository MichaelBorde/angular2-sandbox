import {Component} from '@angular/core';

@Component({
  selector: 'sb-modal-example',
  templateUrl: './modal-example.component.html'
})
export class ModalExampleComponent {

  constructor() {
  }

  onOpenModal() {
    this.modalVisible = true;
  }

  onModalClosed() {
    this.modalVisible = false;
  }
}
