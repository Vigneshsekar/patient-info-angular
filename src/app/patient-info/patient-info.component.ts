import { Component, OnInit } from '@angular/core';
import { PatientDataService } from '../patient-data.service';
import { Patient } from '../patient';
import { FirebaseListObservable } from 'angularfire2/database';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject'

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  public patients: FirebaseListObservable<Patient[]>;

  searchRecords;
  startAt = new Subject()
  endAt = new Subject()
  lastKeypress: number = 0;
  startSearch: boolean = false;

  constructor(private patientDataService: PatientDataService) {
   }

  ngOnInit() {
    this.patients = this.patientDataService.getAllPatientsList()

    this.patientDataService.getPatients(this.startAt, this.endAt)
    .subscribe(searchRecords => this.searchRecords = searchRecords)
  }

  search($event) {
    ($event.target.value.length > 1) ? this.startSearch = true : this.startSearch = false;
    if ($event.timeStamp - this.lastKeypress > 200) {
      let q = $event.target.value
      this.startAt.next(q)
      this.endAt.next(q+"\uf8ff")
    }
    this.lastKeypress = $event.timeStamp
  }
}
