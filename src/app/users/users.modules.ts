import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {FormsModule} from '@angular/forms';
import { UsersService } from './users.service';
import { NgRedux } from 'ng2-redux';
import { UsersActions} from '../store/users/users.actions';

@NgModule({
  declarations: [RegisterComponent],
  providers: [UsersService, UsersActions],
  imports: [FormsModule]
})
export class UsersModule {}

