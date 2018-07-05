"use strict";
// Uncomment these imports to begin using these cool features!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {inject} from '@loopback/context';
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const payment_methods_repository_1 = require("../repositories/payment-methods.repository");
const jsonwebtoken_1 = require("jsonwebtoken");
const user_repository_1 = require("../repositories/user.repository");
const payment_method_1 = require("../models/payment-method");
let PaymentController = class PaymentController {
    constructor(paymentRepo, userRepo) {
        this.paymentRepo = paymentRepo;
        this.userRepo = userRepo;
    }
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
    async newCustomer(jwt) {
        var stripe = require("stripe")("sk_test_R37hOTQ4G9B8DIOzXtnhCKEP");
        // try {
        // const customer = await stripe.customers.create({
        //   description: 'Customer for andrew.wilson@example.com',
        //   source: 'tok_mastercard'
        //   //paymentMethod.cardSource,
        // }, function (err, customer) {
        //   if (err) { return cb(err); }
        //   console.log(customer);
        //   return customer;
        // });
        // }
        // catch (err) {
        //   console.log(err);
        //   throw new HttpErrors.BadRequest('Error.');
        // }
    }
    async addPayment(paymentMethod, jwt) {
        var stripe = require("stripe")("sk_test_R37hOTQ4G9B8DIOzXtnhCKEP");
        const source = paymentMethod.cardSource;
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            // const customer = await stripe.customers.create({
            //   email: jwtBody.user.email,
            //   source: paymentMethod.cardSource
            // })
            // need to think about "attaching a source to an existing customer object"
            var newPayment = new payment_method_1.PaymentMethod;
            newPayment.cardSource = paymentMethod.cardSource;
            newPayment.lastFourCardNum = paymentMethod.lastFourCardNum;
            newPayment.userID = jwtBody.user.id;
            // newPayment.cardholder = paymentMethod.cardholder;
            newPayment.customerID = paymentMethod.customerID;
        }
        catch (err) {
            console.log(err);
            throw new rest_1.HttpErrors.BadRequest('Error.');
        }
    }
};
__decorate([
    rest_1.post('/payment-method/customer'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "newCustomer", null);
__decorate([
    rest_1.post('/payment-method'),
    __param(0, rest_1.requestBody()), __param(1, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [payment_method_1.PaymentMethod, String]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "addPayment", null);
PaymentController = __decorate([
    __param(0, repository_1.repository(payment_methods_repository_1.PaymentMethodsRepository.name)),
    __param(1, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [payment_methods_repository_1.PaymentMethodsRepository,
        user_repository_1.UserRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map