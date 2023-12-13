import { HttpService } from './../../../../core/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.scss']
})
export class ChangepassComponent implements OnInit{

  eyePass = 'visibility';
  eyeNewPass = 'visibility';
  eyeRePass = 'visibility';
  typePass = 'password';
  typeNewPass = 'password';
  typeRePass = 'password';


  changepassForm = new FormGroup({
    password: new FormControl(''),
    passnew: new FormControl(''),
    repass: new FormControl(''),
  });

  constructor(private HttpService: HttpService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    
  }

  showPass(){
    if(this.typePass == 'password'){
      this.typePass = 'text';
      this.eyePass = 'visibility_off';
    }else{
      this.typePass = 'password';
      this.eyePass = 'visibility';
    }
  }

  showNewPass(){
    if(this.typeNewPass == 'password'){
      this.typeNewPass = 'text';
      this.eyeNewPass = 'visibility_off';
    }else{
      this.typeNewPass = 'password';
      this.eyeNewPass = 'visibility';
    }
  }

  showRePass(){
    if(this.typeRePass == 'password'){
      this.typeRePass = 'text';
      this.eyeRePass = 'visibility_off';
    }else{
      this.typeRePass = 'password';
      this.eyeRePass = 'visibility';
    }
  }

  submit(){
    if(this.changepassForm.value.repass != this.changepassForm.value.passnew){
      this.snackBar.open('Mật khẩu không khớp!', 'Cảnh báo', {duration: 4000});
      return;
    }
    let params = {
      id: JSON.parse(localStorage.getItem('users') || '{}')['id'],
      password: this.changepassForm.value.password,
      passnew: this.changepassForm.value.passnew,
      repass: this.changepassForm.value.repass,
    }
    // console.log(params);
    this.HttpService.postMethods('infor/changepass', params).subscribe(
      result => {
        if(result.status){
          this.snackBar.open(result.message, 'Thông báo', {duration: 4000});
        }else{
          this.snackBar.open(result.message, 'Lỗi', {duration: 4000});
        }
      }
    );

  }

}
