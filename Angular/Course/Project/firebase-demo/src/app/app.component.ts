import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable, Subscription, map } from 'rxjs';

interface Course {
  key: string;
  value: string;
}

interface Authors {
  key: string;
  value: Chars
}

interface Chars {
  isPremium?: boolean,
  name?: string,
  students?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses$: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses').valueChanges();
  }
  
  add(event: HTMLInputElement){
    this.db.list('/courses').push({
      name: event.value,
      price: 150,
      isLive: true,
      sections: [
        {title: 'Component'},
        {title: 'Directive'},
        {title: 'Template'},
      ]
    });
    event.value = '';
  }

  update(course: any, i: any){
    this.db.object('/courses/' + (i+1)).set(
      {
        title: course + ' update',
        price: 150
      });
  }

  delete(course: any, i: any){
    this.db.object('/courses/' + (i+1)).remove()
    .then(x=>console.log("deleted"));
  }
}

// course$: Observable<Course>;
// author$: Observable<Authors>;

// this.courses$ = db.list<Course>('/courses').snapshotChanges().pipe(
  //   map(snapshot => {
    //     return snapshot.map(courseSnapshot => {
      //       const key = courseSnapshot.key as string;
      //       const value = courseSnapshot.payload.val() as unknown as string;
      //       return { key: key, value: value }
      //     });
      //   })
      // );
// this.course$ = db.object<Course>('/courses/1').snapshotChanges().pipe(
//   map(snapshot => {
//     const key = snapshot.key as string;
//     const value = snapshot.payload.val() as unknown as string;
//     return { key: key, value: value }
//   })
// );
// this.author$ = db.object<Authors>('/authors/1').snapshotChanges().pipe(
//   map(
//     auth => {
//       let key = auth.key as string;
//       let value = auth.payload.val() as Chars;
//       return { key, value }
//     }
//   )
// console.log(this.author$);
// );









// courses: any | undefined;

// subscription: Subscription;
// constructor( db: AngularFireDatabase ){
//   this.subscription = db.list('/courses').valueChanges()
//   .subscribe(courses => {
//     this.courses = courses;
//     console.log(this.courses);
//   });
// }

// ngOnDestroy(): void {
//   this.subscription.unsubscribe();
// }


          //const ch: any = auth.payload.val();
          // value.isPremium= ch?.isPremium;
          // value.name= ch?.name;
          // value.students = ch?.students;
