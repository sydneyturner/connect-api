import { RideRepository } from "../repositories/ride.repository";
import { Ride } from "../models/ride";
export declare class RideController {
    private ridesRepo;
    constructor(ridesRepo: RideRepository);
    getAllRides(jwt: string): Promise<any>;
    getRideByID(jwt: string, id: number): Promise<any>;
    getRidesByUser(jwt: string): Promise<void>;
    createNewRide(newRide: Ride, jwt: string, driverID: number): Promise<any>;
}
