import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { SingupComponent } from './singup/singup.component'


@NgModule({
  declarations: [LoginComponent, SingupComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
      
    

  ],
  exports: [LoginComponent, SingupComponent]
})
export class PublicModule { }
