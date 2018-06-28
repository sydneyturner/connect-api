import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    id?: number;
    cardholder: string;
    paymenttoken: string;
    amount: number;
    curency: string;
    userID: number;
    date: Date;
    getId(): number | undefined;
}
