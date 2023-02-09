import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  country = ['USA', 'CANADA']

  userForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{3,3}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]),
    country: new FormControl('', [Validators.required])
  })

  disabled = false;
  htmlCode: any;
  constructor() {

  }


  ngOnInit(): void {
    // this.htmlCode = 
    // '<html>' +
    //   '<head>' +
    //   '<style>' +
    //   '.one{color:blue !important;}' +
    //   '</style>' +
    //   '</head>' +
    //   '<body">' +
    //   '<h1 class="one" style="color: #fff" align="center">Hi</h1>' +
    //   '<img  src="../../assets/pictures/bg.png" width="100px" height="100px" align="center">' +
    //   '</body>' +
    //   '</html>';


  }

  get userName(): any {
    return this.userForm.get('userName')
  }
  get email(): any {
    return this.userForm.get('email')
  }
  get password(): any {
    return this.userForm.get('password')
  }
  showForm() {
    console.log(this.userForm.value)

  }


}


