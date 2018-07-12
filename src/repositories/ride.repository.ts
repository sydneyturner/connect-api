import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Ride } from '../models/ride';

export class RideRepository extends DefaultCrudRepository<
  Ride,
  typeof Ride.prototype.id
  > {
  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Ride, datasource);
  }
}
