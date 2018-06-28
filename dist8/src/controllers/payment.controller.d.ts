import { PaymentMethodsRepository } from "../repositories/payment-methods.repository";
import { UserRepository } from "../repositories/user.repository";
import { PaymentMethod } from "../models/payment-method";
export declare class PaymentController {
    private paymentRepo;
    private userRepo;
    constructor(paymentRepo: PaymentMethodsRepository, userRepo: UserRepository);
    newCustomer(jwt: string): Promise<any>;
    addPayment(paymentMethod: PaymentMethod, jwt: string): Promise<any>;
}
