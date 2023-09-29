import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/service/advertisement.service';
import { Advertisement } from 'src/mock/models/advertisement.model';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.css']
})
export class AdvertisementPageComponent implements OnInit, OnDestroy {

  public name: string | null | undefined;
  public advertisementList!: Advertisement[];

  constructor(
    private advertisementService: AdvertisementService
    ) {
      this.name = localStorage.getItem('name');
  }

  ngOnInit(): void {
    this.advertisementService.getAdvertisementList().subscribe((advertisementList: Advertisement[]) => {
      this.advertisementList = advertisementList;
    })
  }

  ngOnDestroy() {
    localStorage.removeItem('name');
  }

}
