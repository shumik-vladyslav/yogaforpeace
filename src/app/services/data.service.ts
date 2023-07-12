import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  getData() {
    return this.angularFirestore.collection('media').snapshotChanges().pipe(map((ps: any) => {
      return ps.map(p => {
        const data = p.payload.doc.data() as any;
        const id = p.payload.doc.id;
        return { id, ...data };
      });
    }))
  }
}