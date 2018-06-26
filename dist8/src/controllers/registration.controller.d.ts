import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
export declare class RegistrationController {
    private userRepo;
    constructor(userRepo: UserRepository);
    createNewUser(user: User): Promise<User>;
}
