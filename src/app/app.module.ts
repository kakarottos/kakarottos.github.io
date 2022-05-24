import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneralComponent } from './core/components/general/general.component';
import { CityDetailsComponent } from './core/components/general/city-details/city-details.component';
import { CityListComponent } from './core/components/general/city-list/city-list.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { WeatherTileComponent } from './shared/weather-tile/weather-tile.component';
import { EmptyComponent } from './shared/empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    CityDetailsComponent,
    CityListComponent,
    LoadingComponent,
    WeatherTileComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
