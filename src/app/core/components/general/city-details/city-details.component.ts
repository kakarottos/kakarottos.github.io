import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/api/services/weather-service/weather.service';
import { CityItem } from 'src/app/api/types/types';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.scss']
})
export class CityDetailsComponent implements OnInit {
  cityData: CityItem[] = [];
  cityGeneral: {
    name?: string;
    id?: number;
  } = {};
  loading: boolean= true;

  @Input() actualWeather: CityItem | null = null;
  @Output() hide = new EventEmitter();

  private ApiUrl: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.ApiUrl = `https://api.openweathermap.org/data/2.5/forecast?id=${this.actualWeather?.id}&units=metric&cnt=5&appid=9342a4cb1b0a704e42bdc8dd1d5698fe`;
    setTimeout(() => this.getData(), 1000);//it is not necessary, but used to show loader
  }

  async getData() {
    this.cityData = await this.weatherService
      .getWeatherData(this.ApiUrl)
      .then((parsedData) => {
        this.loading = false;
        return this.weatherService.mapData(parsedData);
      });
    this.cityGeneral = {
      name: this.cityData[0].name,
      id: this.actualWeather?.id,
    };
  }

  showAll() {
    this.hide.emit(null);
  }
}
