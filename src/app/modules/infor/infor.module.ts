import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { InforRoutingModule } from './infor-routing.module';
import { HttpService } from 'src/app/core/http.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MaterialModule } from 'src/app/core/load.material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { InformationComponent } from './components/information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChangepassComponent } from './components/changepass/changepass.component';



@NgModule({
  imports: [
    CommonModule,
    InforRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [HttpService],
  declarations: [IndexComponent, InformationComponent, ChangepassComponent],
})
export class InforModule { }
