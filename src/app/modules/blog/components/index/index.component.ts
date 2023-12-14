import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { Library } from 'src/app/core/library';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  
  show: any = 'grid';
  datas: any;
  checkQuotation: boolean = true;

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
    this.loadList();
  }

  loadList(){
    let url = 'blogs/loadList';
    Library.showloading();
    this.httpService.getMethods(url, []).subscribe(
      result => {
        Library.hideloading();
        this.datas = result.data;
      }
    );
  }
  grid(){this.show = 'grid'; this.checkQuotation = true;}
  list(){this.show = 'list'; this.checkQuotation = false;}


}
