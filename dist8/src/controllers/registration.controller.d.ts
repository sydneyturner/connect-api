import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { Driver } from "../models/driver";
import { DriverRepository } from "../repositories/driver.repository";
export declare class RegistrationController {
    private userRepo;
    private driverRepo;
    constructor(userRepo: UserRepository, driverRepo: DriverRepository);
    createNewUser(user: User): Promise<User>;
    createNewDriver(driver: Driver): Promise<Driver>;
}
