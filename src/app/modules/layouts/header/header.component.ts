import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  styleScroll: any;
  shadow_sm = 'shadow-sm';

  ngOnInit(){
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll = (event: any): void => {
    const n = event.srcElement.scrollingElement.scrollTop;
    if(n > 300){
      this.styleScroll = 'top: 0;';
    }else{
      this.styleScroll = 'top: -100px;';
    }
  }

}
