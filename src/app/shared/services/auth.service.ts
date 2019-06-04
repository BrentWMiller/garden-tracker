import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

// interfaces
import { User } from '../interfaces/user.interface';

// 3rd party
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private db: AngularFirestore) {}

  get state$(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  get user(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  public authState() {
    return this.afAuth.authState;
  }

  public async register(user: User): Promise<any> {
    const response = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

    this.setUserRecord({
      uid: response.user.uid,
      email: response.user.email,
    });

    return response;
  }

  public setUserRecord(entry: User): void {
    const user = {
      uid: entry.uid,
      email: entry.email,
    };

    this.db
      .collection<User>('users')
      .doc(entry.uid) // sets the collection uid to the same as the user's uid
      .set(user);
  }

  public login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
