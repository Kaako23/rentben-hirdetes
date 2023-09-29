import { Component, Input } from '@angular/core';
import { Advertisement } from 'src/mock/models/advertisement.model';

@Component({
  selector: 'app-advertisement-card',
  templateUrl: './advertisement-card.component.html',
  styleUrls: ['./advertisement-card.component.css']
})
export class AdvertisementCardComponent {
  @Input() advertisement!: Advertisement;
}
