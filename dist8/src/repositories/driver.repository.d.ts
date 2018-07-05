import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Driver } from '../models/driver';
export declare class DriverRepository extends DefaultCrudRepository<Driver, typeof Driver.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
