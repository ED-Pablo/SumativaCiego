import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"sumativahorariociego-504e0","appId":"1:802082586687:web:c7646217f19442a6d3788a","databaseURL":"https://sumativahorariociego-504e0-default-rtdb.firebaseio.com","storageBucket":"sumativahorariociego-504e0.appspot.com","apiKey":"AIzaSyC0O8qQ3O2BorWSBXoNqbGTcxvmB03VW-0","authDomain":"sumativahorariociego-504e0.firebaseapp.com","messagingSenderId":"802082586687"})), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
