import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from '../core/load.material.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ],
  declarations: [
    LayoutsComponent,
    SidebarComponent
  ],
})
export class ClientModule { }
