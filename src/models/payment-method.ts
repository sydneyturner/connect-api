
import { Entity, property, model } from '@loopback/repository';

@model({
  name: "payment"
})
export class PaymentMethod extends Entity {
  @property({
    type: 'number',
    id: true
  })
  id?: number;

  // @property({
  //   type: 'string',
  //   required: true
  // })
  // cardholder: string;

  @property({
    type: 'string',
    length: 4,
  })
  lastFourCardNum: string;

  @property({
    type: 'string',
    required: true
  })
  cardSource: string;

  @property({
    type: 'number',
    id: true
  })
  userID: number;

  @property({
    type: 'number',
    id: true
  })
  customerID: number;


  getId() {
    return this.id;
  }
}
