import {
  AfterViewInit,
  Component,
  ElementRef,
  Input, OnDestroy, OnInit,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import {take, takeUntil} from 'rxjs/operators';

import { IReportsGraph, IUserData } from '../../model/get-users.model';
import { graphConfig } from 'src/app/shared/functions/chart-config.function';
import { DashboardApiService } from '../../services/dashboard-api.service';
import {Subject} from "rxjs";
import {DashboardStateService} from "../../services/dashboard-state.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() userId: number = 1;

  graphDataSource: IReportsGraph | null = null;
  subscription$: Subject<IUserData[]> = new Subject();
  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: ElementRef | undefined;

  constructor(public dashboardStateService: DashboardStateService,
              private dashboardApiService: DashboardApiService
  ) {
    // this.dashboardStateService.graphData$
    //   .pipe(take(1))
    //   .subscribe(() =>
    //   this.dashboardApiService.getGraph(this.userId)
    //     .subscribe(value => this.dashboardStateService.setGraph(value)));
  }

  ngOnInit(): void {
    this.dashboardStateService.graphData$
      .pipe(takeUntil(this.subscription$))
      .subscribe(value => this.graphDataSource = value)
  }

  ngAfterViewInit(): void {
    if (this.mychart) {
      this.canvas = this.mychart.nativeElement;
    }
    this.ctx = this.canvas.getContext('2d');

    this.dashboardStateService.graphData$
      .pipe(take(1))
      .subscribe(() => {
        this.dashboardApiService
          .getGraph(this.userId)
          .pipe(take(1))
          .subscribe((data: IReportsGraph) => {
            this.graphDataSource = data;

            new Chart(
              this.ctx,
              graphConfig(
                Object.values(data.data),
                Object.keys(data.data),
                data.type
              )
            );
          });
      })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }
}
