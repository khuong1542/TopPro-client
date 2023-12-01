import { HttpService } from 'src/app/core/http.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  styleScroll: any;
  shadow_sm = 'shadow-sm';
  is_login: any = false;
  users: any;
  menu: any = false;

  constructor(private HttpService: HttpService, private router: Router, private snackBar: MatSnackBar){

  }

  ngOnInit(){
    window.addEventListener('scroll', this.scroll, true);
    this.users = JSON.parse(localStorage.getItem('users') || '{}');
    if(this.users.id){
      this.is_login = true;
    }
  }
  scroll = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n > 300){
      this.styleScroll = 'top: 0;';
    }else{
      this.styleScroll = 'top: -100px;';
    }
  }
  openMenu(){
    this.menu = !this.menu;
    if(this.menu){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.removeAttribute('style');
    }
  }
  logout(){
    let params = {};
    this.HttpService.postMethods('logout', params).subscribe(
      result => {
        if(result.status){
          this.snackBar.open('Đăng xuất thành công!', 'Thông báo', {duration: 4000});
          this.router.navigate(['login']);
          localStorage.clear();
        }else{
          this.snackBar.open('Đăng xuất thất bại!', 'Lỗi', {duration: 4000});
        }
      }
    );
  }
  infor(){
    this.router.navigate(['infor']);
  }
  

}
