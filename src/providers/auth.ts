import { Injectable } from '@angular/core';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Injectable()
export class AuthProvider {

    constructor(public auth: Auth, public user: User) {
    }

    signup(userInfo) {
        return this.auth.signup(userInfo).then(() => {
            return this.auth.login('basic', userInfo);
        });
    }
    
    login(userLogin) {
        return this.auth.login('basic', userLogin, {'remember': true});
    }
    
    logout() {
        return this.auth.logout();
    }

}
