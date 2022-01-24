import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable()
export class MessageService {
  bsModalRef: BsModalRef;

  constructor(
   @Inject(BsModalService) private bsModalService: BsModalService,
  ) { }

  confirm(title: string, message: string, options: string[]): Observable<string> {
    const initialState = {
      title: title,
      message: message,
      options: options,
      answer: "",
    };
    this.bsModalRef = this.bsModalService.show(ConfirmDialogComponent, { initialState });

    return new Observable<string>(this.getConfirmSubscriber());
  }

  private getConfirmSubscriber() {
    return (observer) => {
      const subscription = this.bsModalService.onHidden.subscribe((reason: string) => {
        observer.next(this.bsModalRef.content.answer);
        observer.complete();
      });

      return {
        unsubscribe() {
          subscription.unsubscribe();
        }
      };
    }
  }

}
