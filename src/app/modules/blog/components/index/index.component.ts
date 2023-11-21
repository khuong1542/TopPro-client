import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  main_news: any;
  latest_news: any;
  hot_news: any;

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    let url = 'blogs/loadList';
    this.httpService.getMethods(url, []).subscribe(
      response => {
        console.log(response);
        this.latest_news = response.data.latest_news;
        this.hot_news = response.data.hot_news;
      }
    );

  }


}