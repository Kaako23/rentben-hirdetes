import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      private router: Router
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          name: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  get formControls() { 
    return this.form.controls; 
  }

  onSubmit() {
      this.submitted = true;
      
      if (this.form.invalid) {
          return;
      }

      this.router.navigate(['/advertisement']);
  }
}
