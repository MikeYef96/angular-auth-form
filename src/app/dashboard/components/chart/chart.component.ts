import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import Chart from 'chart.js/auto';
import { filter, take } from 'rxjs/operators';

import { IReportsGraph } from '../../model/get-users.model';
import { getGraphRequest } from '../../store/dashboard.actions';
import { selectAllAssessmentsGraph } from '../../store/dashboard.selectors';
import { graphConfig } from 'src/app/shared/functions/chart-config.function';
import { IDashboardState } from '../../model/dashboard-state.model';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
    standalone: false
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() userId = null;

  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: ElementRef | undefined;

  constructor(public storeDashboard: Store<IDashboardState>) {}

  ngOnInit(): void {
    this.storeDashboard.dispatch(getGraphRequest({ userId: this.userId }));
  }

  ngAfterViewInit(): void {
    if (this.mychart) {
      this.canvas = this.mychart.nativeElement;
    }
    this.ctx = this.canvas.getContext('2d');

    if (!this.canvas || !this.ctx) {
      return;
    }

    this.storeDashboard
      .select(selectAllAssessmentsGraph)
      .pipe(
        filter((data): data is IReportsGraph => Boolean(data) && Boolean(data.data)),
        take(1)
      )
      .subscribe((data: IReportsGraph) => {
        const chartData = Object.values(data.data) as number[];
        const chartLabels = Object.keys(data.data);

        new Chart(this.ctx, graphConfig(chartData, chartLabels, data.type));
      });
  }
}
