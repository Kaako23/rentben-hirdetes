import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdvertisementService } from "../../service/advertisement.service";
import { Advertisement } from "../../../mock/models/advertisement.model";
import { Router } from "@angular/router";

@Component({
    selector: 'app-advertisement-add',
    templateUrl: './advertisement-add.component.html',
    styleUrls: ['./advertisement-add.component.css']
})
export class AdvertisementAddComponent {
    public form!: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private advertisementService: AdvertisementService,
        private router: Router,
    ) {
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
        let advertisement = {
            title: this.formControls['title'].value,
            name: this.formControls['name'].value,
            phone: this.formControls['phone'].value,
            description: this.formControls['description'].value,
        } as Advertisement;

        this.advertisementService.setAdvertisement(advertisement);
        this.router.navigate(['/advertisement']);
    }
}
