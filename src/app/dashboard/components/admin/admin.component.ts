import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { getUsersRequest } from '../../store/dashboard/dashboard.actions';
import { IDashboardState } from '../../store/dashboard/dashboard.reducer';
import { selectAllUsers } from '../../store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getUsersRequest());
  }

  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'groups'];
  dataSource = this.storeDashboard.select(selectAllUsers);

  ngOnInit(): void {
    // this.storeDashboard.select(selectAllUsers).subscribe((v) => console.log(v));
  }
}
