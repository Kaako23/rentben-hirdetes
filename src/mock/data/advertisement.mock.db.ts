import { Advertisement } from "../models/advertisement.model";

export class AdvertisementMockDB {
    public static advertisementList: Advertisement[] = [
        {
            name: 'Gipsz Jakab', 
            phone: '+06201111111', 
            title: 'Hírdetés1', 
            description: 'Valami leírás'
        },
        {
            name: 'Teszt Elek', 
            phone: '+06202627777', 
            title: 'Hírdetés2', 
            description: 'Valami leírás'
        }
    ];
}
