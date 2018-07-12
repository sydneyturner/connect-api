import { Entity, property, model } from '@loopback/repository';

@model()
export class Ride extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'number',
    required: true
  })
  userID: number;

  @property({
    type: 'number',
    required: true
  })
  driverID: number;

  @property({
    type: 'string',
  })
  status: string;

  getId() {
    return this.id;
  }
}
