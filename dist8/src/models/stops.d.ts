import { Entity } from '@loopback/repository';
export declare class Stops extends Entity {
    id?: number;
    route: string;
    name: string;
    lat: number;
    lng: number;
    address: string;
    getId(): number | undefined;
}
