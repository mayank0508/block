import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm =false;

  poll = {
    question: "do you like dog or cats ?",
    votes: [0, 5 ,7, 1],
    voted: true,
  };
}
