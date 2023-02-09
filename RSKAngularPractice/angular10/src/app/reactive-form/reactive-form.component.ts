import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormRegisterService } from '../form-register.service';
import { nameValidator } from '../Shared/name.valid';
import { passwordValidator } from '../Shared/password.valid';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // loginForm = new FormGroup({
  //   name: new FormControl(''),
  //   password: new FormControl(),
  //   confirmPassword: new FormControl(),
  //   city: new FormControl(),
  //   state: new FormControl(),
  //   pincode: new FormControl()
  // });

  constructor(private _fb: FormBuilder, private _regService: FormRegisterService) { }
  loginForm: any;

  ngOnInit() {
    this.loginForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4), nameValidator(/admin/), nameValidator(/password/)]],
      check: [],
      email: ['', [Validators.required]],
      password: [''],
      confirmPassword: [''],
      city: [''],
      state: [''],
      pincode: [''],
      alternateEmail: this._fb.array([])
    }, { validator: passwordValidator });
    this.loginForm.get('check').valueChanges.subscribe((checkedValue: any) => {
      const email = this.loginForm.get('email');
      if (checkedValue) {
        email.setValidators(Validators.required);

      }

      else {
        email.clearValidators();
      }
      email.updateValueAndValidity();

    });

  }
  displayValues() {
    this.loginForm.patchValue({
      name: 'Rajitha',
      password: '7890',
      confirmPassword: '7890',
      city: 'kadapa',
      state: 'andhra'
    });
  }
  get name() {
    return this.loginForm.controls.name
  }
  // get password() {
  //   return this.loginForm.controls.password
  // }
  // get confirmPassword() {
  //   return this.loginForm.controls.confirmPassword
  // }
  get email() {
    return this.loginForm.controls.email
  }
  get alternateEmail() {
    return this.loginForm.get('alternateEmail') as FormArray;
  }
  addAlternateEmail() {
    this.alternateEmail.push(this._fb.control(''))
  }

  onSubmit(loginForm: any) {
    console.log(loginForm.value);
    this._regService.enroll(loginForm.value).subscribe(result => {
      console.log('success:', result)
    })

  }
}
