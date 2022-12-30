import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { FormMessage } from '../main-page/main-page.component';
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersMessages = [];
  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.angularFirestore.collection('users').snapshotChanges().pipe(map((actions: any) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe(res => {
      console.log(res);
      
      this.usersMessages = res;
    })
  }
  checkUser(userMessage, i) {
    console.log("USER CHECK", userMessage, i);
    const id = userMessage.id;
    this.angularFirestore.doc(`users/${id}`).update(userMessage)
  }
}
