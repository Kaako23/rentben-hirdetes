import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPageComponent } from './advertisement-page.component';

describe('AdvertisementPageComponent', () => {
  let component: AdvertisementPageComponent;
  let fixture: ComponentFixture<AdvertisementPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementPageComponent]
    });
    fixture = TestBed.createComponent(AdvertisementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
