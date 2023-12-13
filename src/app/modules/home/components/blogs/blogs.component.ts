import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{

  datas: any;

  constructor(){}

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    this.datas = [{},{},{},{},{},{},{},{},];
  }

}
