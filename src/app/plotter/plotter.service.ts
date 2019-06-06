import { Injectable } from '@angular/core';

// 3rd party
import { AngularFirestore } from '@angular/fire/firestore';

// services
import { AuthService } from '../shared/services/auth.service';

// interfaces
import { Box } from './interfaces/box.interface';
import { User } from '../shared/interfaces/user.interface';
import { Plot } from './interfaces/plot.interface';

@Injectable({
  providedIn: 'root',
})
export class PlotterService {
  uid: string;

  constructor(private authService: AuthService, private db: AngularFirestore) {
    this.uid = authService.user.uid;
  }

  createPlot(plot: Plot) {
    this.db
      .collection('users')
      .doc(this.uid)
      .collection('plots')
      .add(plot);
  }

  saveGrid(boxPositions: Array<Box>) {
    const event = {
      boxes: boxPositions,
    };

    this.db
      .collection('users')
      .doc(this.uid)
      .update(event);
  }

  loadGrid() {
    const docRef = this.db.collection('users').doc(this.uid);

    return docRef.get();
  }

  saveBoxDetails(box: Box) {
    // this.db
    //   .collection(`users/`)
    //   .where('boxes', 'array-contains', box);
  }
}
