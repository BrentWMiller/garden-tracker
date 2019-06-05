import { Injectable } from '@angular/core';

// 3rd party
import { AngularFirestore } from '@angular/fire/firestore';

// services
import { AuthService } from '../shared/services/auth.service';

// interfaces
import { Box } from './interfaces/box.interface';
import { User } from '../shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class PlotterService {
  constructor(private authService: AuthService, private db: AngularFirestore) {}

  saveGrid(boxPositions: Array<Box>) {
    const event = {
      boxes: boxPositions,
    };

    this.authService.updateUserRecord(this.authService.user.uid, event);
  }

  loadGrid() {
    const uid = this.authService.user.uid;
    const docRef = this.db.collection('users').doc(uid);

    return docRef.get();
  }
}
