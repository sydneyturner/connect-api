// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors, param } from "@loopback/rest";
import { Payment } from "../models/payment";
import { PaymentMethodsRepository } from "../repositories/payment-methods.repository";
import { verify } from "jsonwebtoken";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { PaymentMethod } from "../models/payment-method";

export class PaymentController {
  constructor(@repository(PaymentMethodsRepository.name) private paymentRepo: PaymentMethodsRepository,
    @repository(UserRepository.name) private userRepo: UserRepository) { }


  // @get('/payment-methods')
  // async getPaymentMethod(): Promise<Payment[]> {
  //   return await this.paymentRepo.find();
  // }

  // charge card (payment)
  // @post('/payment')
  // async chargePayment(
  //   @requestBody() payment: Payment,
  //   @param.query.string('jwt') jwt: string
  // ): Promise<any> {

  //   var stripe = require("stripe")("sk_test_R37hOTQ4G9B8DIOzXtnhCKEP");

  //   const token = payment.paymenttoken;

  //   try {
  //     var jwtBody = verify(jwt, 'shh') as any;

  //     var storedPayment = new Payment;
  //     storedPayment.cardholder = payment.cardholder;
  //     storedPayment.paymenttoken = payment.paymenttoken;
  //     storedPayment.amount = payment.amount;
  //     storedPayment.curency = payment.curency;
  //     storedPayment.userID = jwtBody.user.id;
  //     storedPayment.date = payment.date;
  //     // storedPayment.time = payment.time;

  //     // CHARGE CARD
  //     const charge = await stripe.charges.create({
  //       // need to check this amount
  //       amount: '30',
  //       //Math.trunc((payment.amount * 100)),
  //       currency: 'zar',
  //       //payment.curency,
  //       customer: storedPayment.userID,
  //       source: PaymentMethod.cardSource,
  //       //token,
  //       description: "Charge for user " + storedPayment.userID,

  //     });
  //     console.log(charge);

  //     return charge;
  //   }

  //   catch (err) {
  //     console.log(err);
  //     throw new HttpErrors.BadRequest('Error.');
  //   }
  // }

  // add new payment method to user


  // create new customer
  @post('/payment-method/customer')
  async newCustomer(@param.query.string('jwt') jwt: string): Promise<any> {
    var stripe = require("stripe")("sk_test_R37hOTQ4G9B8DIOzXtnhCKEP");

    try {
      const customer = await stripe.customers.create({
        source: 'tok_mastercard',
        //paymentMethod.cardSource,
      })
      console.log(customer);
      return customer;
    }
    catch (err) {
      console.log(err);
      throw new HttpErrors.BadRequest('Error.');
    }
  }


  @post('/payment-method')
  async addPayment(@requestBody() paymentMethod: PaymentMethod, @param.query.string('jwt') jwt: string): Promise<any> {

    var stripe = require("stripe")("sk_test_R37hOTQ4G9B8DIOzXtnhCKEP");

    const source = paymentMethod.cardSource;

    try {
      var jwtBody = verify(jwt, 'shh') as any;

      // const customer = await stripe.customers.create({
      //   email: jwtBody.user.email,
      //   source: paymentMethod.cardSource
      // })

      // need to think about "attaching a source to an existing customer object"

      var newPayment = new PaymentMethod;
      newPayment.cardSource = paymentMethod.cardSource;
      newPayment.lastFourCardNum = paymentMethod.lastFourCardNum;
      newPayment.userID = jwtBody.user.id;
      // newPayment.cardholder = paymentMethod.cardholder;
      newPayment.customerID = paymentMethod.customerID;



    }
    catch (err) {
      console.log(err);
      throw new HttpErrors.BadRequest('Error.');
    }

  }

  //get paymentmethod by user

  // save multiple cards (post/get)
  // create card (post)
  // remove cards (del)
  // update default card


}
