import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/services/auth.service';
import { getAssessmentsRequest } from '../../store/dashboard/dashboard.actions';
import { IDashboardState } from '../../store/dashboard/dashboard.reducer';
import { selectAllAssessments } from '../../store/dashboard/dashboard.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private storeDashboard: Store<IDashboardState>
  ) {
    this.storeDashboard.dispatch(getAssessmentsRequest());
  }

  allUsers$ = this.storeDashboard.select(selectAllAssessments);
  firstName$ = this.storeDashboard
    .select(selectAllAssessments)
    .subscribe((v) => v.map((first_name: any) => first_name));

  displayedColumns: string[] = ['Agreeableness', 'Drive', 'Luck', 'Openess'];
  dataSource = this.storeDashboard.select(selectAllAssessments);

  ngOnInit(): void {
    this.storeDashboard
      .select(selectAllAssessments)
      .subscribe((v) => console.log(v));
  }
}
