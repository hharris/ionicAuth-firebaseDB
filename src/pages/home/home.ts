import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth';
import { UserDataProvider } from '../../providers/user-data';

import { OnboardPage } from '../onboard/onboard';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, public authProvider: AuthProvider, public userData: UserDataProvider) {
    }
    
    logout() {
        this.authProvider.logout();
        this.navCtrl.setRoot(OnboardPage);  
    }
}
