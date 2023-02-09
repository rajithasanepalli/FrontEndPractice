import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ui';
  notifications = 0;
  showSpinner = false;
  showButton = true;
  constructor(private router: Router) {

  }
  loadingData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 10000)

  }
  goToToolBar() {
    this.router.navigate(['/toolbar']);
    this.showButton = false;
  }
}

