import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(public api: ApiService) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    dob: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    pincode: new FormControl(''),
    phonenumber: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    newpassword: new FormControl(''),
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngOnInit() {}

  pinCheck() {
    let pincode = this.profileForm.value.pincode;
    if (pincode?.length == 6) {
      this.api.getPincodeData(pincode).subscribe((data) => {
        this.profileForm.get('state')?.setValue(data[0].stateName);
        this.profileForm.get('district')?.setValue(data[0].districtName);

        console.log(data);
        console.log(data[0].stateName);
      });
    }
  }
}


