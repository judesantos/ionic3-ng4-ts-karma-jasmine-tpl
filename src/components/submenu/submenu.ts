import { Component } from '@angular/core';

/**
 * Generated class for the SubmenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'submenu',
  templateUrl: 'submenu.html'
})
export class SubmenuComponent {

  text: string;

  constructor() {
    console.log('Hello SubmenuComponent Component');
    this.text = 'Hello World';
  }

}
