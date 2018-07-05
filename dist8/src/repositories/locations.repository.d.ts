import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Locations } from '../models/locations';
export declare class DriverRepository extends DefaultCrudRepository<Locations, typeof Locations.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
