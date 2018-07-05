import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Routes } from '../models/routes';
export declare class RoutesRepository extends DefaultCrudRepository<Routes, typeof Routes.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
