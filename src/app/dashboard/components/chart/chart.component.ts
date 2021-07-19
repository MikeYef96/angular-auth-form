import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  CHART_DATA_VALUES_ARRAY,
  CHART_DATA_KEYS_ARRAY,
} from '../../constants/chart_data';
import {
  IUserAssessment,
  IAssessmentGraphData,
} from '../../model/get-users.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() itemId = null;

  constructor() {}

  ngOnInit(): void {}
}
