import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/api/services/weather-service/weather.service';
import { CityItem } from 'src/app/api/types/types';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  availableCities: number[] = [
    2950159, // Berlin
    756135, //Warsaw
    3094802, //Krakow
    2643743, //Londyn
    2759794, //Amsterdam
  ];
  city: CityItem | null = null;
  loading = true;
  weatherData: CityItem[] = [];

  private ApiUrl: string = `https://api.openweathermap.org/data/2.5/group?id=${this.availableCities}&units=metric&appid=ff1bc4683fc7325e9c57e586c20cc03e`;

  constructor(private weatherService: WeatherService) {}

  get hasContent() {
    return !!this.weatherData.length || !!this.city;
  }

  ngOnInit() {
    setTimeout(() => this.getData(), 1000);//it is not necessary, but used to show loader
  }

  async getData() {
    this.weatherData = await this.weatherService
      .getWeatherData(this.ApiUrl)
      .then((data) => {
        this.loading = false;
        return this.weatherService.mapData(data);
      });
  }

  showDetails(city: CityItem) {
    this.city = city;
  }

  showList() {
    this.city = null;
  }
}
