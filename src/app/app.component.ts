import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showForm =false;
  activePoll = null;

  polls = [
    {
    question: "do you like dog or cats ?",
    image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg&w=1440",
    votes: [0, 5 ,7],
    options: ["cats", "dogs", "none"],
    voted: true,
  },
  {
    question: "Best GOAT?",
    image: "https://i.insider.com/5ace331a146e7126008b456e?width=700",
    votes: [9, 5 ,7, 8],
    options: ["messi", "cristiano", "neymar"],
    voted: false,
  },
];


setActivePoll(poll){
  this.activePoll = poll;
 }
}
