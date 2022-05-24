import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CityItem } from 'src/app/api/types/types';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {
  @Input() cityData: CityItem | null = null;
  @Output() show = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  showCity() {
    this.show.emit(this.cityData);
  }
}
