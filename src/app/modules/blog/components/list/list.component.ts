import { HttpService } from './../../../../core/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Library } from 'src/app/core/library';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  datas: any;
  code: any;
  show: any = 'grid';
  checkQuotation: boolean = true;
  name: any;
  
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private HttpService: HttpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.code = data['code'];
    });
    this.loadList();
  }

  loadList(){
    let params = {
      code: this.code
    };
    Library.showloading();
    this.HttpService.postMethods('blogs/list', params).subscribe(
      result => {
        Library.hideloading();
        this.name = result.data.name;
        this.datas = result.data.datas;
      }
    );
  }

  grid(){this.show = 'grid'; this.checkQuotation = true;}
  list(){this.show = 'list'; this.checkQuotation = false;}

  back(){
    let url = 'blog';
    this.router.navigate([url]);
  }

}
