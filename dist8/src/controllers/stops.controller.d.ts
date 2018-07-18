import { StopsRepository } from "../repositories/stops.repository";
import { Stops } from "../models/stops";
export declare class StopsController {
    private stopsRepo;
    constructor(stopsRepo: StopsRepository);
    getStopsByTownRoute(): Promise<Array<Stops>>;
    getAllStops(): Promise<any>;
}
