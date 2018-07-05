import { Entity } from '@loopback/repository';
export declare class TownRoute extends Entity {
    id?: number;
    lat: number;
    lng: number;
    getId(): number | undefined;
}
