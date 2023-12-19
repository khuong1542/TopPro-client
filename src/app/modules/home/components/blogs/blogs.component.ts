import { HttpService } from './../../../../core/http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  datas: any;

  constructor(private HttpService: HttpService){}

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    let params = {};
    let data = this.HttpService.postMethods('home/blogs', params).subscribe(
      result => {
        if(result.status){
          this.datas = result.data.data;
        }else{
          this.datas = [];
        }
      }
    );
  }

}
