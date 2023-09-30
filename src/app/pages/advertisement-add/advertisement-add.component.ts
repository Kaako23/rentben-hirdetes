import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-advertisement-add',
  templateUrl: './advertisement-add.component.html',
  styleUrls: ['./advertisement-add.component.css']
})
export class AdvertisementAddComponent {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ){  
  }

  get formControls() {
    return this.form.controls;
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [''],
      name: [''],
      phone: [''],
      description: ['']
    });
  }
  
  onSubmit() {

  }
}
