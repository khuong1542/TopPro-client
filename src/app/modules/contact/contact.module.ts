import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { MaterialModule } from 'src/app/core/load.material.module';



@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IndexComponent
  ],
})
export class ContactModule { }
