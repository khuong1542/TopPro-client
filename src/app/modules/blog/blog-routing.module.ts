import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { ReaderComponent } from './components/reader/reader.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'reader/{slug}',
    component: ReaderComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
