import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Driver } from '../models/driver';

export class DriverRepository extends DefaultCrudRepository<
  Driver,
  typeof Driver.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Driver, datasource);
  }
}
