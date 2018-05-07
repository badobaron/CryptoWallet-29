import {Injectable} from '@angular/core';
import { HttpService } from '../Core/http.service';
import { UsersModule } from './users.modules';


@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) { }
  register (user) {
   return  this.httpService.post('auth/signup', user);
  }

}
