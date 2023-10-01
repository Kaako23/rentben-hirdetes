import { User, UserRole } from "../models/user.model";

export class UserMockDB {
    public static user: User[] = [
        {
            name: 'Teszt Elek',
            phone: '062011111',
            email: 'pelda@gmail.com',
            password: 'valamijelszo',
            address:'',
            role: UserRole.User
        },
        {
            name: 'Gipsz Jakab',
            phone: '062026277',
            email: 'gipszjakab@gmail.com',
            password: 'adminajelszo',
            address:'',
            role: UserRole.Admin
        }
    ];
}
