import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  result: any;
  constructor(private http: HttpClient) {}

  addStudents(name, price) {
    const uri = 'http://localhost:4000/students/add';
    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res =>
          console.log('Done'));
  }

  getStudents() {
    const uri = 'http://localhost:4000/students';
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  editStudents(id) {
    const uri = 'http://localhost:4000/students/edit/' + id;
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }

  updateStudents(name, price, id) {
    const uri = 'http://localhost:4000/students/update/' + id;

    const obj = {
      name: name,
      price: price
    };
    this
      .http
      .post(uri, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteStudents(id) {
    const uri = 'http://localhost:4000/students/delete/' + id;

        return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
