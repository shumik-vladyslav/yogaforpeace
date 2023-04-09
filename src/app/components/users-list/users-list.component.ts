import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FormMessage } from '../main-page/main-page.component';
@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersMessages: Array<FormMessage> = [];
  allMessages: Array<FormMessage> = [];
  fromFieldFrom: FormControl;
  constructor(
    private angularFirestore: AngularFirestore,
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.fromFieldFrom = this.fb.control('');
    this.fromFieldFrom.valueChanges.subscribe((value) => {
      if(value) {
        this.filterUsersByFrom(value);
      }
    });
    this.fromFieldFrom.setValue("Ahimsa")
    this.angularFirestore.collection('users').snapshotChanges().pipe(map((actions: any) => {
      return actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    })).subscribe(res => {
      this.allMessages = res;
      this.filterUsersByFrom(this.fromFieldFrom.value);
    });
  }
  filterUsersByFrom(from: string) {
    if(from == 'all') {
      this.usersMessages = this.allMessages;
      this.sortUserMessages();
      return;
    }
    this.usersMessages = this.allMessages.filter(message => message.from === from);
    this.sortUserMessages();
  }

  sortUserMessages() {
    this.usersMessages.sort((a, b) => {
      return b.date - a.date;
    });
  }

  checkUser(userMessage, i) {
    console.log("USER CHECK", userMessage, i);
    const id = userMessage.id;
    this.angularFirestore.doc(`users/${id}`).update(userMessage)
  }
}
