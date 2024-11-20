import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
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
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    address: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    district: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required),
    pincode: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
    phonenumber: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    gender: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.pattern('^.{8,12}$')]),
    repassword: new FormControl('',[Validators.required,Validators.pattern('^.{8,12}$')]),
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


