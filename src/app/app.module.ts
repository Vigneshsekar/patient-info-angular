import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdIconModule, MdTabsModule} from '@angular/material';

import { AppComponent } from './app.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { TopToolbarComponent } from './common/top-toolbar/top-toolbar.component';
import { NavTabsComponent } from './common/nav-tabs/nav-tabs.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

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
    MdButtonModule, 
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
