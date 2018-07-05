import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { Driver } from '../models/driver';
import { DriverRepository } from "../repositories/driver.repository";
export declare class LoginController {
    private userRepo;
    private driverRepo;
    constructor(userRepo: UserRepository, driverRepo: DriverRepository);
    loginUser(login: User): Promise<any>;
    loginDriver(login: Driver): Promise<any>;
}
