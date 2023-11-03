import { APP_BASE_HREF, LocationStrategy } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  baseUrl: any = document.getElementsByTagName('base')[0].href;
  year = new Date().getFullYear();
  constructor(){}

  ngOnInit() {
  }
}
