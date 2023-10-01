import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/service/advertisement.service';
import { Advertisement } from 'src/mock/models/advertisement.model';
import { AuthenticationService } from "../../service/authentication.service";

@Component({
    selector: 'app-advertisement-page',
    templateUrl: './advertisement-page.component.html',
    styleUrls: ['./advertisement-page.component.css']
})
export class AdvertisementPageComponent implements OnInit {

    public name: string;
    public advertisementList!: Advertisement[];

    constructor(
        private advertisementService: AdvertisementService,
        private authenticationService: AuthenticationService
    ) {
        this.name = this.authenticationService.getCurrentUser().name;
    }

    ngOnInit(): void {
        if (!this.advertisementService.getUpdatedAdvertisementList().length) {
            this.advertisementService.getAdvertisementList().subscribe((advertisementList: Advertisement[]) => {
                this.advertisementService.setAdvertisementList(advertisementList);
                this.advertisementList = this.advertisementService.getUpdatedAdvertisementList();
            })
        } else {
            this.advertisementList = this.advertisementService.getUpdatedAdvertisementList();
        }

      this.advertisementService.onAdvertisementListChanged.subscribe((advertisement: Advertisement[]) => {
          this.advertisementList = this.advertisementService.getUpdatedAdvertisementList();
      });
    }
}
