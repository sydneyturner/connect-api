import { Entity } from '@loopback/repository';
export declare class Routes extends Entity {
    id?: number;
    routeName: string;
    lat: number;
    lng: number;
    getId(): number | undefined;
}
