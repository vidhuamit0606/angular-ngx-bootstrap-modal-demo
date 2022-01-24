import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MessageService } from './message.service';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConfirmDialogComponent,
  ]
})
export class AppModule { }