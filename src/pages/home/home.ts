import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public menuSelected: Function

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.menuSelected = this.onMenuSelected.bind(this)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  onMenuSelected(node) {
    alert(node.name)
  }
}
