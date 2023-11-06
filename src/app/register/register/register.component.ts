import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  eye_show: any = 'visibility';
  typePass: any = 'password';

  eyeRePass: any = 'visibility';
  typeRePass: any = 'password';

  formGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repass: new FormControl(''),
  });

  showHidePass(){
    if(this.typePass == 'password'){
      this.typePass = 'text';
      this.eye_show = 'visibility_off';
    }else{
      this.typePass = 'password';
      this.eye_show = 'visibility';
    }
  }
  showHideRePass(){
    if(this.typeRePass == 'password'){
      this.typeRePass = 'text';
      this.eyeRePass = 'visibility_off';
    }else{
      this.typeRePass = 'password';
      this.eyeRePass = 'visibility';
    }
  }
  ngOnInit(): void {
    
  }
}
