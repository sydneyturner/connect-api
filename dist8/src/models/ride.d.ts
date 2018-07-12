import { Entity } from '@loopback/repository';
export declare class Ride extends Entity {
    id?: number;
    userID: number;
    driverID: number;
    status: string;
    getId(): number | undefined;
}
