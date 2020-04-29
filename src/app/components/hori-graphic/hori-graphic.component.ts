import { Component, OnInit, Input } from '@angular/core';
import { GraphicsData } from 'src/app/interfaces/graphics-data';

@Component({
  selector: 'app-hori-graphic',
  templateUrl: './hori-graphic.component.html',
  styleUrls: ['./hori-graphic.component.css']
})
export class HoriGraphicComponent implements OnInit {

  @Input() results: GraphicsData[] = [];

  // Options
  view: any[] = [700, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';
  colorScheme = 'nightLights';

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
  }

}
