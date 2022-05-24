export type CityItem = {
    id: number;
    name: string;
    checkTime: string;
    avgTemp: string;
    actualTemp: string;
    minTemp: string;
    maxTemp: string;
    feelsTemp: string;
    humidity: number;
    pressure: number;
    clouds: number;
    visibility: string;
    weather: { description: string; icon: string }[];
    sun: {
      set: Date;
      rise: Date;
    };
    wind: {
      speed: number;
      deg: number;
    };
  };