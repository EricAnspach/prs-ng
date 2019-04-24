import { Vendor } from './vendor.class';

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;    
    unit: string;
    photoPath: string;

    about(): string {
        return `User: id=${this.id}, vendor=${this.vendor}, partNumber=${this.partNumber}, name=${this.name}, price=${this.price}, unit=${this.unit}, photoPath=${this.photoPath}`;
    }

    constructor(id: number, vendor: Vendor, partNumber: string, name: string, price: number, unit: string,
        photoPath: string) {
             this.id = id;
             this.vendor = vendor;
             this.partNumber = partNumber;
             this.name = name;
             this.price = price;
             this.unit = unit;
             this.photoPath = photoPath;
         }
}