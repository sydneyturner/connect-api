import { Entity, property, model } from '@loopback/repository';

@model()
export class Stops extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  route: string;

  @property({
    type: 'string',
    required: true
  })
  name: string;

  @property({
    type: 'number',
    length: 10,
    required: true
  })
  lat: number;

  @property({
    type: 'number',
    length: 10,
    required: true
  })
  lng: number;

  @property({
    type: 'string',
    required: true
  })
  address: string;

  getId() {
    return this.id;
  }
}
