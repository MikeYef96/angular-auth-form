import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CHART_DATA_ARRAY } from '../../constants/chart_data';
import {
  IAssessmentData,
  IAssessmentGraphData,
} from '../../model/get-users.model';
import { getGraphRequest } from '../../store/dashboard.actions';
import { IDashboardState } from '../../store/dashboard.reducer';
import { selectAllAssessmentsGraph } from '../../store/dashboard.selectors';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(public dataSource: Store<IDashboardState>) {}

  columnsToDisplay: string[] = CHART_DATA_ARRAY;

  ngOnInit(): void {}
}
