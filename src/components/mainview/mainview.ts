import { Component } from '@angular/core';

/**
 * Generated class for the MainviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mainview',
  templateUrl: 'mainview.html'
})
export class MainviewComponent {

  text: string;

  constructor() {
    console.log('Hello MainviewComponent Component');
    this.text = 'Hello World';
  }

}
