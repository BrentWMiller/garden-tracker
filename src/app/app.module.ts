import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// configs
import { environment } from '../environments/environment';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ServiceWorkerModule } from '@angular/service-worker';

// modules;
import { SharedModule } from './shared/shared.module';
import { PlotterModule } from './plotter/plotter.module';

// routers
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SeedInventoryModule } from './seed-inventory/seed-inventory.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SharedModule,
    BrowserAnimationsModule,
    HomeModule,
    PlotterModule,
    SeedInventoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
