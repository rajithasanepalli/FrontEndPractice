import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-country-promise',
  templateUrl: './search-country-promise.component.html',
  styleUrls: ['./search-country-promise.component.scss']
})
export class SearchCountryPromiseComponent implements OnInit {
  public countries: any = [];
  private _url: string = "https://restcountries.eu/rest/v2/name/";
  constructor(private _http: HttpClient) { }

  ngOnInit() { }

  searchCountry(country: any) {
    console.log(country);
    this._http.get(this._url + country).subscribe((result: any) => {
      console.log(result);
      this.countries = result
    })


  }
}
