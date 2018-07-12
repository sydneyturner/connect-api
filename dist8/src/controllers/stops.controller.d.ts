import { StopsRepository } from "../repositories/stops.repository";
export declare class StopsController {
    private stopsRepo;
    constructor(stopsRepo: StopsRepository);
    getStopsByTownRoute(): Promise<any>;
}
