import { Entity } from '@loopback/repository';
export declare class PaymentMethod extends Entity {
    id?: number;
    lastFourCardNum: string;
    cardSource: string;
    userID: number;
    customerID: number;
    getId(): number | undefined;
}
