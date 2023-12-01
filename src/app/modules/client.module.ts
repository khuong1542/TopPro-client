import { HttpService } from 'src/app/core/http.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from '../core/load.material.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ],
  providers: [HttpService],
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent
  ],
})
export class ClientModule { }
