import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor() {}
  
  async getWeatherData(apiCall: string) {
    return fetch(apiCall).then((response) => response.json());
  }

  mapData(data: any) {
    const { list: citiesList } = data;
    return citiesList.map((city: typeof data['list']) => {
      const {
        id,
        name,
        dt,
        clouds,
        main: { feels_like, humidity, pressure, temp, temp_max, temp_min },
        sys: { country, sunrise, sunset },
        visibility,
        wind: { deg, speed },
        weather,
      } = city;
      return {
        id: id || data.city.id,
        name: name || data.city.name,
        checkTime: new Date(dt * 1000).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        actualTemp: this.getCelsius(temp),
        minTemp: this.getCelsius(temp_min),
        maxTemp: this.getCelsius(temp_max),
        avgTemp: this.getCelsius((temp_min + temp_max) / 2),
        feelsTemp: this.getCelsius(feels_like),
        humidity: humidity + '%',
        pressure: pressure,
        clouds: clouds.all,
        visibility: visibility,
        weather: weather,
        sun: {
          set: new Date(sunset * 1000).toLocaleString(),
          rise: new Date(sunrise * 1000).toLocaleString(),
        },
        wind: {
          speed: Math.round(speed * 3.6) + ' km/h',
          deg: deg,
        },
      };
    });
  }

  private getCelsius(temp: number): string {
    return Math.round(temp) + '\u2103';
  }
}
