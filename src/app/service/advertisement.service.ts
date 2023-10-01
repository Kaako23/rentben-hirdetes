import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Advertisement } from "src/mock/models/advertisement.model";

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService {
    private advertisementList: BehaviorSubject<Advertisement[]>;
    public onAdvertisementListChanged: Observable<Advertisement[]>;

    constructor(private httpClient: HttpClient) {
        this.advertisementList = new BehaviorSubject([] as Advertisement[]);
        this.onAdvertisementListChanged = this.advertisementList.asObservable();
    }

    public getAdvertisementList(): Observable<Advertisement[]> {
        return this.httpClient.get<Advertisement[]>('/getAdvertisementList');
    }

    public setAdvertisementList(advertisementList: Advertisement[]): void {
        this.advertisementList.next(advertisementList);
    }

    public getUpdatedAdvertisementList(): Advertisement[] {
        return [...this.advertisementList.value];
    }

    public setAdvertisement(advertisement: Advertisement): void {
        let advertisementList: Advertisement[] = [...this.advertisementList.value];
        advertisementList.push(advertisement);
        this.advertisementList.next(advertisementList);
    }

    public removeAdvertisement(index: number): void {
        let advertisementList: Advertisement[] = [...this.advertisementList.value];
        advertisementList.splice(index, 1);
        this.advertisementList.next(advertisementList);
    }
}
