import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/mock/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private httpClient: HttpClient){

    }
    public getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>('/getUserList');
    }
}
