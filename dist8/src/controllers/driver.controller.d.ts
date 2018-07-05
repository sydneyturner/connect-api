import { DriverRepository } from "../repositories/driver.repository";
import { Driver } from "../models/driver";
export declare class DriverController {
    private driverRepo;
    constructor(driverRepo: DriverRepository);
    getAllDrivers(jwt: string): Promise<any>;
    getDriver(jwt: string): Promise<any>;
    editDrivreInfo(jwt: string, obj: Partial<Driver>): Promise<any>;
}
