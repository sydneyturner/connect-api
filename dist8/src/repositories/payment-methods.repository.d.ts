import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Payment } from '../models/payment';
import { PaymentMethod } from '../models/payment-method';
export declare class PaymentMethodsRepository extends DefaultCrudRepository<PaymentMethod, typeof Payment.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
