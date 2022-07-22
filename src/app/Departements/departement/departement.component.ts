import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Departement } from 'src/models/Departement';
import { UrlApi } from 'src/models/UrlApi';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss'],
})
export class DepartementComponent implements OnInit {
  departements: Departement[] = [];

  constructor(private _httpClient: HttpService) {}

  ngOnInit(): void {
    this.getDepartement();
  }

  getDepartement() {
    this._httpClient
      .getRequest<any>(UrlApi.urlDepartement)
      .subscribe((jsonResponse) => {
        return (this.departements = jsonResponse);
      });
  }
}
