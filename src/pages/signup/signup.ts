import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html'
})
export class SignupPage {

    userInfo = {};
    
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public authProvider: AuthProvider) {

    }
    
    signUp(userInfo) {
        this.authProvider.signup(userInfo).then(() => {
          this.navCtrl.setRoot(HomePage);  
        });
    }
    
    gotoLogin() {
        this.closeModal();
        let myModal = this.modalCtrl.create(LoginPage);
        myModal.present();
    }

    closeModal() {
        this.viewCtrl.dismiss();
    }

}
