import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth';

import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    userLogin = {};
    
    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public modalCtrl: ModalController, public authProvider: AuthProvider) {
    }

    login(userLogin) {
        this.authProvider.login(userLogin).then(() => {
          this.navCtrl.setRoot(HomePage);  
        });
    }
    
    gotoSignUp() {
        this.closeModal();
        let myModal = this.modalCtrl.create(SignupPage);
        myModal.present();
    }
    
    closeModal() {
        this.viewCtrl.dismiss();
    }

}
