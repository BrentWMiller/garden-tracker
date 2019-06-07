import { Injectable } from '@angular/core';

// 3rd party
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// services
import { AuthService } from '../shared/services/auth.service';

// interfaces
import { Box } from './interfaces/box.interface';
import { Plot } from './interfaces/plot.interface';

@Injectable({
  providedIn: 'root',
})
export class PlotterService {
  uid: string;

  constructor(private authService: AuthService, private db: AngularFirestore) {
    this.uid = authService.user.uid;
  }

  public getPlots(): Observable<any> {
    return this.db
      .collection('users')
      .doc(this.uid)
      .collection('plots')
      .snapshotChanges()
      .pipe(
        map((actions) => {
          return actions.map((action) => {
            const data = action.payload.doc.data();
            const id = action.payload.doc.id;
            return { id, ...data };
          });
        })
      );
  }

  async createPlot(plot: Plot) {
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
