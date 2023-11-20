import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ReaderComponent } from './components/reader/reader.component';
import { HttpService } from 'src/app/core/http.service';
import { MaterialModule } from 'src/app/core/load.material.module';



@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    MaterialModule
  ],
  declarations: [IndexComponent, ReaderComponent],
  providers: [HttpService]
})
export class BlogModule { }
