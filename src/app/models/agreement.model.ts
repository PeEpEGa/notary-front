export interface IAgreement {
    id?: string,
    client: string,
    services: { serviceId: string, quantity: number },
    commission: number,
    description: string,
    createdAt?: Date
}

export class Agreement implements IAgreement {
    id?: string;
    client: string;
    services: { serviceId: string, quantity: number };
    commission: number;
    description: string;
    createdAt?: Date;

    constructor(id: string, client: string, services: { serviceId:string, quantity: number }, commision: number, description: string, createdAt: Date) {
        this.id = id || '';
        this.client = client;
        this.services = services;
        this.commission = commision;
        this.description = description;
        this.createdAt = createdAt || Date.now;;
    }
}