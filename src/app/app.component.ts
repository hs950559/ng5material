import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isChecked = false;

  onChange(event){
    console.log(event.source.value);
    console.log(event.checked);
  }
}
