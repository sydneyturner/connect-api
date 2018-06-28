
import { Entity, property, model } from '@loopback/repository';

@model({
  name: "payment"
})
export class Payment extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  @property({
    type: 'string',
    required: true
  })
  cardholder: string;

  @property({
    type: 'string',
    required: true
  })
  paymenttoken: string;

  @property({
    type: 'number',
    required: true
  })
  amount: number;

  @property({
    type: 'string',
    required: true
  })
  curency: string;

  @property({
    type: 'number',
    id: true
  })
  userID: number;

  @property({
    type: 'string'
  })
  date: Date;

  getId() {
    return this.id;
  }
}
