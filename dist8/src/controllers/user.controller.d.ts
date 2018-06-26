import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    getAllUsers(jwt: string): Promise<any>;
    getMe(jwt: string): Promise<any>;
    editUserInfo(jwt: string, obj: Partial<User>): Promise<any>;
}
