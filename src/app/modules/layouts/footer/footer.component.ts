import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // D:\PROJECT\TopPro\client\src\
  baseUrl: any = document.location.origin;
  imagePath: any = '/TopPro/dist/assets/img/footer/icon-1.png';
  constructor(
    private router: Router
    ){
      console.log(router.url)
    }

  ngOnInit() {
    // console.log(this.router.parseUrl('/123'));
    console.log(window.location);
    console.log(document.location);
  }
}
