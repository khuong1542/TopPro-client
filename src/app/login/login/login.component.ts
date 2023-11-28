import { HttpService } from 'src/app/core/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  eye_show: any = 'visibility';
  typePass: any = 'password';

  constructor(private HttpService: HttpService, private router: Router){}

  ngOnInit(): void {
    this.createForm();
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
  createForm(){
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  login(){
    if(!this.loginForm.invalid){
      let params = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
      }
      this.HttpService.postMethods('login', params).subscribe(
        result => {
          localStorage.setItem('users', JSON.stringify(result.data.users));
          this.router.navigate(['home']);
        }
      );
    }
  }
}
