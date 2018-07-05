import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { DriverRepository } from "../repositories/driver.repository";
export declare class UserController {
    private userRepo;
    private driverRepo;
    constructor(userRepo: UserRepository, driverRepo: DriverRepository);
    getAllUsers(jwt: string): Promise<any>;
    getMe(jwt: string): Promise<any>;
    editUserInfo(jwt: string, obj: Partial<User>): Promise<any>;
}
