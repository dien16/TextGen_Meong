import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(/*{
	name: 'page-modal'
}*/)
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html'
})
export class ModalPage {

  constructor(public navCtrl: NavController, 
  	public viewCtrl : ViewController,
  	public navParams: NavParams) {
}

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }*/

  public closeModal(){
  	this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
  	console.log('ionViewDidLoad ModalPage');
    console.log(this.navParams.get('message'));
  }


}
