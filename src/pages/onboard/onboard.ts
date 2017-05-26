import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';


import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
    selector: 'page-onboard',
    templateUrl: 'onboard.html'
    })

export class OnboardPage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    }

    loginModal() {
        let myModal = this.modalCtrl.create(LoginPage);
        myModal.present();
    }
    
    signupModal() {
        let myModal = this.modalCtrl.create(SignupPage);
        myModal.present();
    }

}
