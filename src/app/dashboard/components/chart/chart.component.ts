import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { Chart } from 'chart.js';
import { take } from 'rxjs/operators';

import { IReportsGraph } from '../../model/get-users.model';
import { graphConfig } from 'src/app/shared/functions/chart-config.function';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() userId = null;

  canvas: any;
  ctx: any;

  @ViewChild('mychart') mychart: ElementRef | undefined;

  constructor(public dashboardService: DashboardService) {}

  ngAfterViewInit(): void {
    if (this.mychart) {
      this.canvas = this.mychart.nativeElement;
    }
    this.ctx = this.canvas.getContext('2d');

    this.dashboardService
      .getGraph(this.userId)
      .pipe(take(1))
      .subscribe((data: IReportsGraph) => {
        new Chart(
          this.ctx,
          graphConfig(
            Object.values(data.data),
            Object.keys(data.data),
            data.type
          )
        );
      });
  }
}
