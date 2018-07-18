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
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const driver_repository_1 = require("../repositories/driver.repository");
let DriverController = class DriverController {
    constructor(driverRepo) {
        this.driverRepo = driverRepo;
    }
    async getAllDrivers(jwt) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required');
        var allDrivers = await this.driverRepo.find();
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtBody);
            return await this.driverRepo.find();
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required');
        }
    }
    //http://localhost:3000/me?jwt=thetoken
    async getDriver(jwt) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required');
        try {
            var jwtDriver = jsonwebtoken_1.verify(jwt, 'shh');
            console.log(jwtDriver);
            return jwtDriver;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required');
        }
    }
    // edit Profile
    async editDrivreInfo(jwt, obj) {
        if (!jwt)
            throw new rest_1.HttpErrors.Unauthorized('JWT token is required');
        try {
            var jwtBody = jsonwebtoken_1.verify(jwt, 'shh');
            await this.driverRepo.updateById(jwtBody.driver.id, obj);
            var updatedDriver = await this.driverRepo.findById(jwtBody.driver.id);
            // if (updatedUser.password.)
            if (updatedDriver.password.length < 12) {
                let hashedPassword = await bcrypt.hash(updatedDriver.password, 10);
                obj.password = hashedPassword;
                await this.driverRepo.updateById(updatedDriver.id, obj);
            }
            var jwt = jsonwebtoken_1.sign({
                user: {
                    id: updatedDriver.id,
                    firstname: updatedDriver.firstname,
                    lastname: updatedDriver.lastname,
                    email: updatedDriver.email
                },
            }, 'shh', {
                issuer: 'auth.ix.co.za',
                audience: 'ix.co.za',
            });
            console.log(jwt);
            return {
                token: jwt,
            };
        }
        catch (err) {
            throw new rest_1.HttpErrors.BadRequest('JWT token invalid');
        }
    }
};
__decorate([
    rest_1.get('/drivers'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getAllDrivers", null);
__decorate([
    rest_1.get('/driver'),
    __param(0, rest_1.param.query.string('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "getDriver", null);
__decorate([
    rest_1.patch('/editDriver'),
    __param(0, rest_1.param.query.string('jwt')), __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DriverController.prototype, "editDrivreInfo", null);
DriverController = __decorate([
    __param(0, repository_1.repository(driver_repository_1.DriverRepository.name)),
    __metadata("design:paramtypes", [driver_repository_1.DriverRepository])
], DriverController);
exports.DriverController = DriverController;
//# sourceMappingURL=driver.controller.js.map