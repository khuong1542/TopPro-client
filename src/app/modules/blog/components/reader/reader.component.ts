import { HttpService } from './../../../../core/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {

  slug: any; // Đường dẫn
  datas: any; // Dữ liệu
  txt_search: string = ''; // Nội dung tìm kiếm

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private httpService: HttpService,
  ){}

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(data => {
      this.slug = data['slug'];
    });
    this.loadList();
  }
  /**
   * Thông tin bài viết
   */
  loadList(){
    let params = {
      slug: this.slug,
    }
    this.httpService.getMethods('blogs/reader', params).subscribe(
      result => {
        this.datas = result.data.datas;
      }
    );
  }
  /**
   * Tìm kiếm
   * @param event 
   */
  search(event: any){
    console.log(this.txt_search)
  }

}
