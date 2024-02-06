import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { connectFirestoreEmulator, enableIndexedDbPersistence, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule


    // provideFirebaseApp(()=>initializeApp(environment.firebase)),
    // provideDatabase(()=>getDatabase()),
    // provideFirestore(()=>{
    //   const firestore = getFirestore();
    //   connectFirestoreEmulator(firestore,'localhost', 8080);
    //   enableIndexedDbPersistence(firestore);
    //   return firestore
    // }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
