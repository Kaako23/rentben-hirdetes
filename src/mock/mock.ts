import { UserMockDB } from "./data/user.mock.db";
import { User } from "./models/user.model";
import { AdvertisementMockDB } from "./data/advertisement.mock.db";
import { Advertisement } from "./models/advertisement.model";

export class Mock {
    private readonly userList: User[];
    private readonly advertisementList: Advertisement[];

    constructor() {
        this.userList = UserMockDB.user;
        this.advertisementList = AdvertisementMockDB.advertisementList;
    }

    public getUserList() {
        return this.userList;
    }

    public getAdvertisementList() {
      return this.advertisementList;
    }
}
