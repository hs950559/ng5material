import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedDate = new FormControl(new Date());
  minDate = new Date(2018, 3, 8);
  maxDate = new Date(2018, 3, 15);
}
