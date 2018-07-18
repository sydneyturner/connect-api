import { Entity, property, model } from '@loopback/repository';

@model()
export class Routes extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  routeName: string;

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

  getId() {
    return this.id;
  }
}
