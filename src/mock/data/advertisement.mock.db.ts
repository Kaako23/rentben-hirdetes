import { Advertisement } from "../models/advertisement.model";

export class AdvertisementMockDB {
    public static advertisementList: Advertisement[] = [
        {
            name: 'Gipsz Jakab', 
            phone: '+06201111111', 
            title: 'OLED TV', 
            description: 'OLED TV eladó, ár megbeszélés szerint.'
        },
        {
            name: 'Teszt Elek', 
            phone: '+06202627777', 
            title: 'Téli kabát', 
            description: 'XL-es méretben eladó szőrmekabát. Cimke rajta, ezért új állapotban van.'
        },
    ];
}
