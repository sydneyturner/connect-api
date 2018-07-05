import { RoutesRepository } from "../repositories/routes.repository";
import { Routes } from "../models/routes";
export declare class RoutesController {
    private routesRepo;
    constructor(routesRepo: RoutesRepository);
    getTownRoute(jwt: string): Promise<Routes[]>;
}
