import { Component, OnInit } from '@angular/core';
import * as data from '../admin.json'

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentForm: any;

  constructor() { }

  ngOnInit() {
    this.studentForm = data["default"].studentForm;
    console.log(this.studentForm);
  }
}
