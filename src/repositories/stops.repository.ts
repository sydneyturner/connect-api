import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Stops } from '../models/stops';

export class StopsRepository extends DefaultCrudRepository<
  Stops,
  typeof Stops.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Stops, datasource);
  }
}
