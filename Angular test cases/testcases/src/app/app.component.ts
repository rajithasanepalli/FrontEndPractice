import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testc';
  public sub = ['angular',
    'react',
    'node']
  public age = 30;
  birthday = new Date(1987, 6, 18);
  public message = "iam parent"
  public msg = '';

}



