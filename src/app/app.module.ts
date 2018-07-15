import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackendModule } from './backend/backend.module';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { CommonModule } from '@angular/common';

import { routes } from './app.routes';

import { HomeComponent } from './containers/home';

const Components = [HomeComponent];

@NgModule({
  declarations: Components,
  imports: [
    RouterModule.forRoot(routes),
    BackendModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
