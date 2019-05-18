import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  @ViewChild('myCanvas') myCanvas: ElementRef;
  @Input() canvas_id: string;
  @Input() type: string;
  @Input() labels: string[] = ['Label 1', 'Label 2'];
  @Input() label: string = 'Label';
  @Input() data: number[] = [0, 0];
  @Input() backgroundColor: string[] = ['#fff', '#529cfd'];
  @Input() borderColor: string[] = ['#00f', '#00f'];
  @Input() borderWidth: number = 1;
  @Input() options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

  ngOnInit() {
    Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
  }

  ngOnChanges() {
    Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif";
    let ctx = this.myCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [{
          label: this.label,
          data: this.data,
          backgroundColor: this.backgroundColor,
          borderColor: this.borderColor,
          borderWidth: this.borderWidth
        }]
      },
      options: this.options
    });
  }

}
