import { UserDB } from "./data/user.mock.db";
import { UserDto } from "./models/user.model";

export class Mock {
    private readonly userList: UserDto[];

    constructor() {
        this.userList = UserDB.user;
    }

    public getUserList() {
        return this.userList;
    }
}