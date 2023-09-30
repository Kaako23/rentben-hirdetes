import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from "src/mock/models/user.model";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private currentUser: BehaviorSubject<User>;
    public onCurrentUserChanged: Observable<User>;
    private userList: BehaviorSubject<User[]>;
    public onUserListChanged: Observable<User[]>;

    constructor(private httpClient: HttpClient) {
        this.userList = new BehaviorSubject([] as User[]);
        this.onUserListChanged = this.userList.asObservable();
        this.currentUser = new BehaviorSubject({} as User);
        this.onCurrentUserChanged = this.currentUser.asObservable();
    }

    public getUserList(): Observable<User[]> {
        return this.httpClient.get<User[]>('/getUserList');
    }

    public setUserList(userList: User[]): void {
        this.userList.next(userList);
    }

    public setCurrentUser(user: User): void {
        this.currentUser.next(user);
    }

    public getCurrentUser(): User {
        return this.currentUser.value;
    }

    public getUpdatedUserList(): User[] {
        return [...this.userList.value];
    }

    public setUser(user: User): void {
        let userList: User[] = [...this.userList.value];
        userList.push(user);
        this.userList.next(userList);
    }

    public removeUser(index: number): void {
        let userList: User[] = [...this.userList.value];
        userList.splice(index, 1);
        this.userList.next(userList);
    }
}
