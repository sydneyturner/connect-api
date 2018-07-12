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
const ride_repository_1 = require("../repositories/ride.repository");
const rest_1 = require("@loopback/rest");
const ride_1 = require("../models/ride");
const jsonwebtoken_1 = require("jsonwebtoken");
let RideController = class RideController {
    constructor(ridesRepo) {
        this.ridesRepo = ridesRepo;
    }
    // get endpoint
    async getAllRides(jwt) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        var allRides = await this.ridesRepo.find();
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            return await this.ridesRepo.find();
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
    }
    async getRideByID(jwt, id) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        var ride = await this.ridesRepo.findById(id);
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            return await this.ridesRepo.findById(id);
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
    }
    async getRidesByUser(jwt) {
    }
    // creating new Ride from the user app when user
    async createNewRide(newRide, jwt, driverID) {
        if (!jwt) {
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required.');
        }
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
            newRide.userID = jwtBody.user.id;
            newRide.driverID = driverID;
            console.log(jwtBody);
            console.log(driverID);
            var ride = this.ridesRepo.create(newRide);
            return ride;
        }
        catch (err) {
            console.log(err);
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
    }
};
__decorate([
    rest_1.get('/get-rides'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "getAllRides", null);
__decorate([
    rest_1.get('/ride'),
    __param(0, rest_1.param.query.string('jwt')),
    __param(1, rest_1.param.path.number('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "getRideByID", null);
__decorate([
    rest_1.get('/rides-by-user'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "getRidesByUser", null);
__decorate([
    rest_1.post('/ride'),
    __param(0, rest_1.requestBody()), __param(1, rest_1.param.query.string('jwt')),
    __param(2, rest_1.param.query.number('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ride_1.Ride, String, Number]),
    __metadata("design:returntype", Promise)
], RideController.prototype, "createNewRide", null);
RideController = __decorate([
    __param(0, repository_1.repository(ride_repository_1.RideRepository.name)),
    __metadata("design:paramtypes", [ride_repository_1.RideRepository])
], RideController);
exports.RideController = RideController;
//# sourceMappingURL=ride.controller.js.map