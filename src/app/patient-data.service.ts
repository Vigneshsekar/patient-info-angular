import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { Patient } from './patient';

@Injectable()
export class PatientDataService {
  private basePath: string = '/patients';
  patients: FirebaseListObservable<Patient[]> = null; //  list of objects
  patient: FirebaseObjectObservable<Patient> = null; //   single object

  constructor(private db: AngularFireDatabase) { }

  getAllPatientsList(query={}): FirebaseListObservable<Patient[]> {
    this.patients = this.db.list(this.basePath, {
      query: query
    });
    return this.patients
  }
  // Return a single observable patient
  getPatient(key: string): FirebaseObjectObservable<Patient> {
    const patientPath =  `${this.basePath}/${key}`;
    this.patient = this.db.object(patientPath)
    return this.patient
  }

  getPatients(start, end): FirebaseListObservable<any> {
    return this.db.list('/patients', {
      query: {
        orderByChild: 'name',
        limitToFirst: 10,
        startAt: start,
        endAt: end
      }
    });
  }

  createPatient(patient: Patient): void  {
    console.log(patient);
    this.patients.push(patient)
      .catch(error => this.handleError(error))
  }

  private handleError(error) {
    console.log(error)
  }

}
