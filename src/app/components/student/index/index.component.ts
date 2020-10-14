import { StudentService } from './../../student.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Student } from '../../Student';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  students: any;

  constructor(private http: HttpClient, private service: StudentService) {}

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.service.getStudents().subscribe(res => {
      this.students = res;
    });
  }

  deleteStudent(id) {
    this.service.deleteStudent(id).subscribe(res => {
      console.log('Deleted');
    });
  }
}
