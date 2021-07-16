import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAssessmentGraphData } from '../../model/get-users.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  constructor(public expandedElement: Store<IAssessmentGraphData>) {}

  columnsToDisplay: string[] = ['agreeableness', 'drive', 'luck', 'openess'];

  ngOnInit(): void {}
}
