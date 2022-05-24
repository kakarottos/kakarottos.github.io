import { Component, OnInit, Input } from '@angular/core';
import { CityItem } from 'src/app/api/types/types';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss']
})
export class WeatherTileComponent implements OnInit {
  @Input() weatherData: CityItem | null = null;

  constructor() {}

  ngOnInit(): void {}
}
