import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from 'src/app/service/authentication.service';
import {User} from 'src/mock/models/user.model';
import {Advertisement} from "../../../mock/models/advertisement.model";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public form!: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  get formControls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }
    if (!this.authenticationService.getUpdatedUserList().length) {
      this.authenticationService.getUserList().subscribe((userList: User[]) => {
        this.authenticationService.setUserList(userList);
        this.loginValidation(userList);
      }, (err) => {
        console.error('Something went wrong during the login phase..', err);
      }, () => {
        this.loading = false;
      });

    } else {
      let userList: User[] = this.authenticationService.getUpdatedUserList();
      this.loginValidation(userList);
    }
  }

  loginValidation(userList: User[]): void {
    let userExists = false;
    userList.forEach((user: User) => {
      if (user.email === this.formControls['email'].value && user.password === this.formControls['password'].value) {
        userExists = true;
        this.authenticationService.setCurrentUser(user);
        this.router.navigate(['/advertisement']);
      }
    });

    if (!userExists) {
      alert('Invalid Email or Password! Please try it again!')
    }

    this.loading = false;
  }

}
