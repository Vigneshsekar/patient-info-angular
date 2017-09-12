import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { PatientDataService } from '../patient-data.service';
import { Patient } from '../patient';
import {MdDatepickerInputEvent} from '@angular/material';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patientForm: FormGroup;
  minDate = new Date(1900, 0, 1);
  maxDate = new Date();
  startDate = new Date(1980, 0, 1);
  genders = [
    'Male',
    'Female',
    'Declined to state'
  ];
  active = true;
  MOBILE_REGEX = /^[0-9]{10}$/;
  patient: Patient = new Patient();
  constructor(private patientDataService: PatientDataService) { 
    console.log(this.minDate, this.maxDate);
    this.createForm();
  }
  createForm() {
    this.patientForm = new FormGroup({
      'first_name': new FormControl(this.patient.first_name, Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z]+$/)])),
      'last_name': new FormControl(this.patient.last_name),
      'dob': new FormControl(this.patient.dob, [Validators.required]),
      'gender': new FormControl(this.patient.gender, [Validators.required]),
      'mobile': new FormControl(this.patient.mobile, Validators.compose([Validators.required, Validators.pattern(this.MOBILE_REGEX), Validators.minLength(10)])),
      'other_note': new FormControl(this.patient.other_note),
    });
  }

  createPatientRecord(input) {
    this.patient.first_name = input.first_name;
    this.patient.last_name = input.last_name;
    this.patient.name = input.first_name + ' ' + input.last_name;
    this.patient.dob = input.dob.toString();
    this.patient.gender = input.gender;
    this.patient.mobile = input.mobile;
    this.patient.other_note = input.other_note;
    this.patientDataService.createPatient(this.patient);
    this.patientForm.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }

  getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    this.patient.age = age;
  }

  onInput = (e: MdDatepickerInputEvent<Date>) => this.getAge(e.value);
  onChange = (e: MdDatepickerInputEvent<Date>) =>this.getAge(e.value);

  ngOnInit() {
    
  }

}
