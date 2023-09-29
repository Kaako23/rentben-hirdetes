import { UserDto, UserRole } from "../models/user.model";

export class UserDB {
    public static user: UserDto[] = [
        { 
            name: 'Teszt Elek', 
            phone: '062011111', 
            email: 'pelda@gmail.com', 
            password: 'valamijelszo',
            address:'', 
            role: UserRole.Name 
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