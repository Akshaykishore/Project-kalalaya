import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import * as data from '../admin.json'
import { AdminService } from '../admin.service.js';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})

export class StudentRegistrationComponent implements OnInit {

  studentFormTemplate: any;
  studentDetailsForm: any;
  classCategories: any;
  formSubmitted: boolean;
  fees: any;

  constructor(private fb: FormBuilder, private route: Router, private adminService: AdminService) { }

  ngOnInit() {

    this.formSubmitted = false;

    // Get Student Form Template from admin JSON
    this.studentFormTemplate = data["default"].studentFormTemplate;

    // Get class Category from admin JSON
    this.classCategories = data["default"].classCategories;

    // Creating a Form group
    this.studentDetailsForm = this.fb.group({
      admissionNumber: new FormControl(Math.floor((Math.random() * 1000000) + 1), [Validators.required]),
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      fees: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      landline: new FormControl('', [Validators.required]),
    });
  }

  // Get Fees on change in the class type
  getFees() {
    let value = this.studentDetailsForm.controls.category.value;
    let index = data["default"].classCategories.indexOf(value);
    this.fees = data["default"].classFees[index];
  }

  // On Form Submission
  onSubmit(details) {
    console.log(details);
    this.formSubmitted = true;
    console.log(this.formSubmitted);

    // Post Student Details Service
    this.adminService.storeStudentDetails(details).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
