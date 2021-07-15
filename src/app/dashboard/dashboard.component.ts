import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  selectAdmin,
  selectUser,
} from '../shared/store/dashboard/dashboard.selectors';
import { Store } from '@ngrx/store';
import { UserData } from '../shared/models/user-data.model';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  user$ = this.store.select(selectUser);
  admin$ = this.store.select(selectAdmin);

  constructor(
    private store: Store<UserData>,
    public authService: AuthService
  ) {}

  ngOnInit() {}
}
