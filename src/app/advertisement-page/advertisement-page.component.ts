import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-advertisement-page',
  templateUrl: './advertisement-page.component.html',
  styleUrls: ['./advertisement-page.component.css']
})
export class AdvertisementPageComponent implements OnDestroy{

  public name: string | null | undefined;

  constructor() {
      this.name = localStorage.getItem('name');
  }

  ngOnDestroy() {
    localStorage.removeItem('name');
  }

}
