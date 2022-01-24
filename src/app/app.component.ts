import { Component, Inject } from '@angular/core';

import { MessageService } from './message.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answers: string[] = [];

  constructor(
    @Inject(MessageService) private messageService: MessageService,
  ) {
  }

  confirm() {
    this.messageService.confirm(
      "Confirmation dialog box",
      "Are you sure you want to proceed?",
      ["Yes", "No"])
      .subscribe((answer) => {
        this.answers.push(answer);
      });
  }

}
