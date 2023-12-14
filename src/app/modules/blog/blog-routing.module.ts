import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './components/index/index.component';
import { ReaderComponent } from './components/reader/reader.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'reader/:slug',
    component: ReaderComponent
  },
  {
    path: 'list/:code',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
