import { AuthenticationService } from '../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from "../../mock/models/user.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup;
  public loading = false;
  public submitted = false;
  private alertOptions = {
    autoClose: false,
    keepAfterRouteChange: false,
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.getUserList().subscribe((userList: User[]) => {
      let userExists = false;
      userList.forEach((user: User) => {
        if (user.email === this.formControls['email'].value && user.password === this.formControls['password'].value) {
          userExists = true;
          localStorage.setItem('name', user.name);
          this.router.navigate(['/advertisement']);
        }
      });

      if (!userExists) {
        alert('Invalid Email or Password! Please try it again!')
      }
    }, (err) => {
      console.error('Something went wrong during the login phase..', err);
    }, () => {
      this.loading = false;
    });
  }
}
