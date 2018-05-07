import { NgModule } from '@angular/core';
import { ngModuleJitUrl } from '@angular/compiler';
import {NavbarComponent} from './navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { NgReduxModule } from 'ng2-redux';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  providers: [HttpService, NgReduxModule],
  exports: [NavbarComponent]
})

export class CoreModule { }
