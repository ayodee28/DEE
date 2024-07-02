import { Component } from '@angular/core';
import { STUDENT } from '../student-list';
import { student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent {
  students = STUDENT;
  student: student = {
    id: 0,
    name: 'Windstorm',
    age: 19
  };
}
