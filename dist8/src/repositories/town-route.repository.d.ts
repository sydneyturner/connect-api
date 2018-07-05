import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { TownRoute } from '../models/town-route';
export declare class TownRouteRepository extends DefaultCrudRepository<TownRoute, typeof TownRoute.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
