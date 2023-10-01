import { AuthenticationService } from '../../service/authentication.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserRole } from 'src/mock/models/user.model';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  public form!: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['']
    });
  }

  get formControls() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.form.invalid) {
      this.loading = false;
      return;
    }

    let user = {
      name: this.formControls['name'].value,
      phone: this.formControls['phone'].value,
      email: this.formControls['email'].value,
      password: this.formControls['password'].value,
      address: this.formControls['address'].value,
      role: UserRole.User,
    } as User;

    if (!this.authenticationService.getUpdatedUserList().length) {
      this.authenticationService.getUserList().subscribe((userList: User[]) => {
        this.authenticationService.setUserList(userList);
      });
    }

    this.authenticationService.setUser(user);
    this.authenticationService.setCurrentUser(user);
    this.loading = false;
    alert('Registration successful.');
    this.router.navigate(['/advertisement']);
  }
}
