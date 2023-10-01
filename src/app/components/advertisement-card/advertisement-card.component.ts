import { Component, Input } from '@angular/core';
import { Advertisement } from 'src/mock/models/advertisement.model';
import { AdvertisementService } from "../../service/advertisement.service";
import { AuthenticationService } from "../../service/authentication.service";

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.css']
})
export class AdvertisementCardComponent {
  @Input() advertisement!: Advertisement;
  @Input() index!: number;

  constructor(
    private advertisementService: AdvertisementService,
    private authenticationService: AuthenticationService
  ) {
  }

  isAdmin(): boolean {
    return this.authenticationService.getCurrentUser().role === 'admin'
  }

  deleteAdvertisement(i: number): void {
    this.advertisementService.removeAdvertisement(i);
  }
}
