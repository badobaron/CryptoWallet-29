import { Component } from '@angular/core';
import { RegisterUser } from './register.user.module';
import {Router} from '@angular/router';
import { UsersActions } from '../store/users/users.actions';

import 'rxjs/add/operator/map';

import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';


@Component({
  selector: 'app-root',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  user: RegisterUser = new RegisterUser();

  constructor(
    private userActions: UsersActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  register () {
    this.userActions.register(this.user);
    this.ngRedux
    .select(state => state.users.userRegistered)
    .subscribe(userRegistered => {
      if (userRegistered) {
        this.router.navigateByUrl('users/login');
      }
    });
  }
}

