import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

// 3rd party
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  get state$(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  get user(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  public authState() {
    return this.afAuth.authState;
  }

  public register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  public login(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  public logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
