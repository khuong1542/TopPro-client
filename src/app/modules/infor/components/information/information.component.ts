import { HttpService } from 'src/app/core/http.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'vi' }]
})
export class InformationComponent implements OnInit {

  baseUrl: any = document.getElementsByTagName('base')[0].href;
  inforForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    birthday: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
  });
  fileName = '';
  urlAvatar: any = this.baseUrl + 'assets/img/user-default.png';

  constructor(private HttpService: HttpService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getInfor();

  }
  /**
   * Lấy thông tin người dùng
   */
  getInfor() {
    let users = JSON.parse(localStorage.getItem('users') || '{}');
    this.inforForm.setValue({
      username: users['username'],
      name: users['name'],
      birthday: users['birthday'],
      email: users['email'],
      phone: users['phone'],
      gender: users['gender'],
    });
    this.urlAvatar = users['avatar'];
  }
  /**
   * Cập nhật ảnh đại diện
   * @param event 
   * @returns 
   */
  onFileSelected(event: any) {
    let file: File = event.target.files[0];
    console.log(file);
    console.log(file.type);
    if(file.size > 3145728){
      this.snackBar.open('File tải lên tối đa 3MB', 'Lỗi', {duration: 4000});
      return;
    }
    if(file.type != 'image/png' && file.type != 'image/jpg' && file.type != 'image/jpeg'){
      this.snackBar.open('File tải lên không đúng định dạng', 'Lỗi', {duration: 4000});
      return;
    }
    if (file) {
      this.fileName = file.name;
      let formData = new FormData();
      formData.append("id", JSON.parse(localStorage.getItem('users') || '{}')['id']);
      formData.append("uploads", file);
      this.HttpService.postMethods("uploads", formData).subscribe(
        result => {
          if(result.status && result.data.status){
            this.snackBar.open(result.data.message, 'Thông báo', {duration: 4000});
            let users = JSON.parse(localStorage.getItem('users') || '{}');
            users['avatar'] = result.data.data.url;
            localStorage.setItem('users', JSON.stringify(users));
            this.urlAvatar = result.data.data.url;
          }else{
            this.snackBar.open(result.data.message, 'Lỗi', {duration: 4000});
          }
        }
      );
    }
  }
  /**
   * Lưu thông tin người dùng
   */
  submit() {
    let params = {
      id: JSON.parse(localStorage.getItem('users') || '{}')['id'],
      username: this.inforForm.value.username,
      name: this.inforForm.value.name,
      birthday: this.inforForm.value.birthday,
      email: this.inforForm.value.email,
      phone: this.inforForm.value.phone,
      gender: this.inforForm.value.gender,
    };
    this.HttpService.postMethods('update', params).subscribe(
      result => {
        localStorage.setItem('users', JSON.stringify(result.data.data));
        localStorage.setItem('token', result.data.data.token);
        window.location.reload();
      }
    );
  }

}
