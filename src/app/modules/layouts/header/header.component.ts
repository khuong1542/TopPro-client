import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  styleScroll: any;
  shadow_sm: any;

  ngOnInit(){
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n > 300){
      this.shadow_sm = 'shadow-sm';
      this.styleScroll = 'top: 0;';
    }else{
      this.shadow_sm = '';
      this.styleScroll = 'top: -100px;';
    }
  }

}
