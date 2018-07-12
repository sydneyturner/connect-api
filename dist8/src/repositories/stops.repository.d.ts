import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Stops } from '../models/stops';
export declare class StopsRepository extends DefaultCrudRepository<Stops, typeof Stops.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
