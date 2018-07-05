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
const user_1 = require("../models/user");
const user_repository_1 = require("../repositories/user.repository");
// import {Login} from '../models/login';
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const driver_1 = require("../models/driver");
const driver_repository_1 = require("../repositories/driver.repository");
let LoginController = class LoginController {
    constructor(userRepo, driverRepo) {
        this.userRepo = userRepo;
        this.driverRepo = driverRepo;
    }
    async loginUser(login) {
        var users = await this.userRepo.find();
        var email = login.email;
        var password = await bcrypt.hash(login.password, 10);
        for (var i = 0; i < users.length; i++) {
            var user = users[i];
            // find the user by email address if not...(look at Perry's code)
            if (user.email == email && await bcrypt.compare(login.password, user.password)) {
                var jwt = jsonwebtoken_1.sign({
                    user: {
                        id: user.id,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email
                    },
                    anything: "hello",
                }, 'shh', {
                    issuer: 'auth.ix.co.za',
                    audience: 'ix.co.za',
                });
                console.log(jwt);
                return {
                    token: jwt,
                };
            }
        }
        throw new rest_1.HttpErrors.NotFound('User not found, sorry!');
    }
    async loginDriver(login) {
        var drivers = await this.driverRepo.find();
        var email = login.email;
        var password = await bcrypt.hash(login.password, 10);
        for (var i = 0; i < drivers.length; i++) {
            var driver = drivers[i];
            // find the user by email address if not...(look at Perry's code)
            if (driver.email == email && await bcrypt.compare(login.password, driver.password)) {
                var jwt = jsonwebtoken_1.sign({
                    user: {
                        id: driver.id,
                        firstname: driver.firstname,
                        lastname: driver.lastname,
                        email: driver.email
                    },
                    anything: "hello",
                }, 'shh', {
                    issuer: 'auth.ix.co.za',
                    audience: 'ix.co.za',
                });
                console.log(jwt);
                return {
                    token: jwt,
                };
            }
        }
        throw new rest_1.HttpErrors.NotFound('Driver not found, sorry!');
    }
};
__decorate([
    rest_1.post('/loginUser'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginUser", null);
__decorate([
    rest_1.post('/loginDriver'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_1.Driver]),
    __metadata("design:returntype", Promise)
], LoginController.prototype, "loginDriver", null);
LoginController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __param(1, repository_1.repository(driver_repository_1.DriverRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        driver_repository_1.DriverRepository])
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map