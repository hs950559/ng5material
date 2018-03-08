import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  categories = [
    {name: 'Books'},
    {name: 'Movies'},
    {name: 'Toys'},
    {name: 'Fashion'}
  ];

  selectCategory(c) {
    this.categories.filter(category => c !== category)
        .forEach( category => category['selected'] = false );

    c.selected = !c.selected;
  }
}
