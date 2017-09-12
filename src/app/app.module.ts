import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdSelectModule, MdTableModule, MdCardModule, MdInputModule, MdChipsModule, MdToolbarModule, MdIconModule, MdTabsModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';
import { PatientDataService } from './patient-data.service';
import { AppComponent } from './app.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { TopToolbarComponent } from './common/top-toolbar/top-toolbar.component';
import { NavTabsComponent } from './common/nav-tabs/nav-tabs.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

export const firebaseConfig = {
  apiKey: "AIzaSyCLeQQu7kleC5l7ZfQI4eLl6hLiDPzC1LI",
  authDomain: "patient-info-dataphi.firebaseapp.com",
  databaseURL: "https://patient-info-dataphi.firebaseio.com",
  projectId: "patient-info-dataphi",
  storageBucket: "patient-info-dataphi.appspot.com",
  messagingSenderId: "382464404095"
};

@NgModule({
  declarations: [
    AppComponent,
    PatientInfoComponent,
    TopToolbarComponent,
    NavTabsComponent,
    AddPatientComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MdButtonModule, 
    MdInputModule,
    MdChipsModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MdTableModule
  ],
  providers: [PatientDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

