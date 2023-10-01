export interface User {
    name: string;
    phone: string;
    email: string;
    password: string;
    address: string;
    role: UserRole;
}

export enum UserRole {
    User = 'user',
    Admin = 'admin'
}
