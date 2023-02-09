import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  myValue: any;
  options: any = ['Angular', 'react', 'mondodb'];
  myControl = new FormControl();
  filterOptions: any;
  minDate = new Date();
  maxDate = new Date(2022, 8, 10);
  dateFilter = (date: any) => {
    let day = date.getDay();
    return day != 0 && day != 6;
  }
  constructor(private _snacbarService: MatSnackBar, private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.filterOptions = this.myControl.valueChanges.pipe(startWith(''),
      map(value => this._filter(value)))
  }
  private _filter(value: string): string[] {
    const filterVale = value.toLowerCase();
    return this.options.filter((option: string) => option.toLowerCase().includes(filterVale));

  }
  openSnackBar(message: any, action: any) {
    let _snackRef = this._snacbarService.open(message, action, { duration: 5000 });
    _snackRef.afterDismissed().subscribe(() => {
      console.log("Action dismissed");
    });
    -_snackRef.onAction().subscribe(() => {
      console.log("Action Triggerd")
    });


  }
  openDialog() {
    let baseDilaog = this._dialog.open(PopupComponent, { width: "500px", data: { 'name': 'Rajitha' } })
    baseDilaog.afterClosed().subscribe((result: any) => {
      console.log("${result}")
    })

  }
}
