import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Payment } from '../models/payment';
import { PaymentMethod } from '../models/payment-method';

export class PaymentMethodsRepository extends DefaultCrudRepository<
    PaymentMethod,
    typeof Payment.prototype.id
    > {
    constructor(@inject('datasources.db') protected datasource: DataSource) {
        super(PaymentMethod, datasource);
    }
}
