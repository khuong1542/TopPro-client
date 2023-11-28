import { Component } from '@angular/core';

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

  ngOnInit(){
    window.addEventListener('scroll', this.scroll, true);
    this.users = JSON.parse(localStorage.getItem('users') || '{}');
    if(this.users){
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
  

}
