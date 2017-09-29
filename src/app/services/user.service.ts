import { User } from './../classes/user';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  public user: User = {
    Username: '',
    Password: '',
    DisplayName: '',
    PhotoURL: '',
    Email: '',
    CreateBy: '',
    CreateDate: 0,
    UpdateBy: '',
    UPdateDate: 0,
  };
  constructor() { }

  GetCurrentUserData(): User {
    return this.user;
  }
  SetCurrentUserData(user) {
    this.user = user;
  }
}
