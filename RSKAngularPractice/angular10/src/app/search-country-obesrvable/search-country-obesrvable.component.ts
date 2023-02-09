import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-country-obesrvable',
  templateUrl: './search-country-obesrvable.component.html',
  styleUrls: ['./search-country-obesrvable.component.scss']
})
export class SearchCountryObesrvableComponent implements OnInit {

  public countries: any = [];
  public country = new FormControl();
  private _url: string = "https://restcountries.eu/rest/v2/name/";
  constructor(private _http: HttpClient) { }

  ngOnInit() {


    this.country.valueChanges.pipe(debounceTime(1000)).subscribe((result: any) => {
      console.log(result);
      this._http.get(this._url + this.country.value).subscribe(data => {
        this.countries = data;
      })

    })
  }



}
