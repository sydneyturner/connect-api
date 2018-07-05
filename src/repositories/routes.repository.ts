import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Routes } from '../models/routes';

export class RoutesRepository extends DefaultCrudRepository<
  Routes,
  typeof Routes.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Routes, datasource);
  }
}
