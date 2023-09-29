import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Advertisement } from "src/mock/models/advertisement.model";

@Injectable({
    providedIn: 'root'
})
export class AdvertisementService {
    constructor(private httpClient: HttpClient){

    }
    public getAdvertisementList(): Observable<Advertisement[]> {
        return this.httpClient.get<Advertisement[]>('/getAdvertisementList');
    }
}
