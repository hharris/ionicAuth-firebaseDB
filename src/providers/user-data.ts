import { Injectable } from '@angular/core';

import {Database} from '@ionic/cloud-angular';

@Injectable()
export class UserDataProvider {

    public chats: Array<string>;

    constructor(public db: Database) {
        this.db.connect();
        this.db.collection('chats').watch().subscribe( (chats) => {
          this.chats = chats;
        }, (error) => {
          console.error(error);
        });
    }

}
