import { UserMockDB } from "./data/user.mock.db";
import { User } from "./models/user.model";
import { AdvertisementMockDb } from "./data/advertisement.mock.db";
import { Advertisement } from "./models/advertisement.model";

export class Mock {
    private readonly userList: User[];
    private readonly advertisementList: Advertisement[];

    constructor() {
        this.userList = UserMockDB.user;
        this.advertisementList = AdvertisementMockDb.advertisementList;
    }

    public getUserList() {
        return this.userList;
    }

    public getAdvertisementList() {
      return this.advertisementList;
    }
}
