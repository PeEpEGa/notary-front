import { Agreement } from "./agreement.model";

export enum LoyaltyStatus {
    'Bronze',
    'Silver',
    'Gold'
}

export interface IClient {
    id: string;
    name: string;
    businessType: string;
    address: string;
    phone: string;
    loyaltyStatus: LoyaltyStatus;
    dealsAmount: number;
}


export class Client implements IClient {
    id: string;
    name: string;
    businessType: string;
    address: string;
    phone: string;
    loyaltyStatus: LoyaltyStatus;
    dealsAmount: number;



    constructor(id: string, name: string, businessType: string, address: string, phone: string, loyaltyStatus: LoyaltyStatus, dealsAmount: number) {
        this.id = id;
        this.name = name;
        this.businessType = businessType;
        this.address = address;
        this.phone = phone;
        this.loyaltyStatus = loyaltyStatus || LoyaltyStatus.Bronze;
        this.dealsAmount = dealsAmount;    
    }
}
  