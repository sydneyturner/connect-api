import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Ride } from '../models/ride';
export declare class RideRepository extends DefaultCrudRepository<Ride, typeof Ride.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
