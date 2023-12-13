import { MaterialModule } from './../../core/load.material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IndexComponent } from './components/index/index.component';
import { BlogsComponent } from './components/blogs/blogs.component';



@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [IndexComponent, BlogsComponent],
})
export class HomeModule { }
