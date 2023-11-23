import { HttpService } from './../../../../core/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.scss']
})
export class ReaderComponent implements OnInit {


  slug: any;
  datas: any;
  txt_search: string = '';

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
  loadList(){
    let params = {
      slug: this.slug,
    }
    this.httpService.getMethods('blogs/reader', params).subscribe(
      response => {
        this.datas = response.data.datas;
      }
    );
  }
  search(event: any){
    console.log(this.txt_search)
  }

}
