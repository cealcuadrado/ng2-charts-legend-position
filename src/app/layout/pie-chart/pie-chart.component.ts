import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, PositionType } from 'chart.js';
import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  legendPositions: PositionType[] = ['top', 'right', 'bottom', 'left'];
  currentLegendPosition = this.legendPositions[0];


  pieChartOptions: ChartOptions = {
    animation: undefined,
    legend: {
      position: this.currentLegendPosition,
      labels: {
        fontFamily: "'Nunito', 'sans-serif'",
        fontSize: 16,
      },
    },
    tooltips: {
      bodyFontFamily: "'Nunito', 'sans-serif'",
      bodyFontSize: 16
    },
    responsive: true,
  };

  pieChartData: SingleDataSet = [20, 30, 10, 40];
  pieChartLabels: Label[] = ['Action', 'Comedy', 'Drama', 'Romance'];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];

  constructor() {
    monkeyPatchChartJsLegend();
    monkeyPatchChartJsTooltip();
  }

  ngOnInit(): void {}

  changeLegendPosition(): void {
    this.pieChartOptions.legend.position = this.currentLegendPosition;
  }
}
