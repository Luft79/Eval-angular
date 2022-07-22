import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Region } from 'src/models/Region';
import { UrlApi } from 'src/models/UrlApi';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent implements OnInit {

  regions: Region[] = []

  constructor(private _httpClient: HttpService) {}

  ngOnInit(): void {
    this.getRegions()
  }

  getRegions(){
    this._httpClient
      .getRequest<Region[]>(UrlApi.urlRegions)
      .subscribe((jsonResponse) => {return this.regions = jsonResponse});
  }
}
