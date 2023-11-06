import { MaterialModule } from './../core/load.material.module';
import { RegisterRoutingModule } from './register-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RegisterRoutingModule,
    MaterialModule
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule { }
