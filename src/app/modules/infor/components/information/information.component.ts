import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  inforForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
  });

  constructor(){}

  ngOnInit(): void {
    this.information()
  }

  information(){
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    this.inforForm.setValue({
      username: users['username'],
      name: users['name'],
      birthday: users['birthday'],
      email: users['email'],
      phone: users['phone'],
      gender: users['gender'],
    })
  }

}
