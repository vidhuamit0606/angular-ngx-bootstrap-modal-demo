import { Component, Output, EventEmitter, Inject } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
//import 'bootstrap/dist/css/bootstrap.min.css';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent {
  title: string;
  message: string;
  options: string[];
  answer: string = "";

  constructor(
   @Inject(BsModalRef) public bsModalRef: BsModalRef,
  ) { }

  respond(answer: string) {
    this.answer = answer;

    this.bsModalRef.hide();
  }

}
