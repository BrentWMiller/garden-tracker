import { Injectable } from '@angular/core';

// 3rd party
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// services
import { AuthService } from '../shared/services/auth.service';

// interfaces
import { Seed } from './interfaces/seed.interface';

@Injectable({
  providedIn: 'root',
})
export class SeedService {
  uid: string;

  constructor(private authService: AuthService, private db: AngularFirestore) {
    this.uid = authService.user.uid;
  }

  public getSeeds(): Observable<any> {
    return this.db
      .collection('users')
      .doc(this.uid)
      .collection('seeds')
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

  createSeed(seed: Seed) {
    this.db
      .collection('users')
      .doc(this.uid)
      .collection('seeds')
      .add(seed);
  }

  updateSeed(seed: Seed, id: string) {
    this.db
      .collection('users')
      .doc(this.uid)
      .collection('seeds')
      .doc(id)
      .update(seed);
  }
}
