import { Component, OnInit } from '@angular/core';
import { FormRegisterService } from '../form-register.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {
  courseHasError = true;
  submitted: boolean = false;
  errorMsg: any;
  course = ['angular', 'react', 'vuejs', 'nodejs'];
  userModel = new User("Rajitha", "raji@gmail.com", 7995970897, "male", "default", true);
  constructor(private _regService: FormRegisterService) { }

  ngOnInit(): void {
  }

  validateCourse(value: any) {
    if (value === 'default') {
      this.courseHasError = true;
    }
    else {
      this.courseHasError = false;
    }
  }
  onSubmit() {
    this.submitted = true;
    this._regService.enroll(this.userModel).subscribe(result => {
      console.log(result)
    }, error => {
      this.errorMsg = error.statusText
    })

  }
}
