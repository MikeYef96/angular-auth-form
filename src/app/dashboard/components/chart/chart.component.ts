import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { takeUntil } from 'rxjs/operators';

import { IReportsGraph, IUserData } from '../../model/get-users.model';
import { graphConfig } from 'src/app/shared/functions/chart-config.function';
import { Subject } from 'rxjs';
import { DashboardStateService } from '../../services/dashboard-state.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit, OnDestroy {
  @Input() userId: number = 1;

  canvas: any;
  ctx: any;

  graphDataSource: IReportsGraph | null = null;

  subscription$: Subject<IUserData[]> = new Subject();

  @ViewChild('mychart') mychart: ElementRef | undefined;

  constructor(
    public dashboardStateService: DashboardStateService,
  ) {
    this.dashboardStateService.setGraphData(this.userId)
  }

  ngAfterViewInit(): void {
    if (this.mychart) {
      this.canvas = this.mychart.nativeElement;
    }

    this.ctx = this.canvas.getContext('2d');

    this.dashboardStateService.graphData$
      .pipe(takeUntil(this.subscription$))
      .subscribe((graphData: IReportsGraph | null) => {
       if(graphData) {
         this.graphDataSource = graphData;

         this.dashboardStateService
         new Chart(
           this.ctx,
           graphConfig(
             Object.values(graphData.data),
             Object.keys(graphData.data),
             graphData.type
           )
         )
       }
      });
    }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
