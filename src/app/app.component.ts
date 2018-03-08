import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progress = 10;

  timer = setInterval( () => {
    this.progress++;

    if ( this.progress === 100 ) {
      clearInterval(this.timer);
    }
  }, 100);
}
