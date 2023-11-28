import { HttpService } from 'src/app/core/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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

  constructor(private HttpService: HttpService,
    private snackBar: MatSnackBar,
    private router: Router){
  }

  ngOnInit(): void {

  }

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

  submit(){
    if(this.validForm()){
      let params = {
        name: this.formGroup.value.name,
        username: this.formGroup.value.username,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
        repass: this.formGroup.value.repass,
      };
      let url = 'register';
      this.HttpService.postMethods(url, params).subscribe(
        result => {
          if(result.status == 200){
            this.snackBar.open("Đăng ký thành công", "Thông báo!", {duration: 4000,});
            this.router.navigate(['login']);
          }else{
            this.snackBar.open(result.message, "Lỗi!", {duration: 4000,});
          }
        }
      );
    }
  }

  validForm(){
    let regexEmail = new RegExp('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{1,9}$');
    let email = this.formGroup.value.email ?? '';

    if(this.formGroup.value.name == ''){
      this.snackBar.open("Họ và tên không được để trống!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(this.formGroup.value.username == ''){
      this.snackBar.open("Tên đăng nhập không được để trống!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(this.formGroup.value.email == ''){
      this.snackBar.open("Email không được để trống!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(!regexEmail.test(email)){
      this.snackBar.open("Email không đúng định dạng!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(this.formGroup.value.password == ''){
      this.snackBar.open("Mật khẩu không được để trống!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(this.formGroup.value.repass == ''){
      this.snackBar.open("Nhập lại mật khẩu không được để trống!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else if(this.formGroup.value.password != this.formGroup.value.repass){
      this.snackBar.open("Mật khẩu không khớp!", "Cảnh báo!", {duration: 4000,});
      return false;
    }else{
      return true;
    }
  }
}
