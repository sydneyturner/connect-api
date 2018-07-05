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
const bcrypt = require("bcrypt");
const driver_1 = require("../models/driver");
const driver_repository_1 = require("../repositories/driver.repository");
let RegistrationController = class RegistrationController {
    constructor(userRepo, driverRepo) {
        this.userRepo = userRepo;
        this.driverRepo = driverRepo;
    }
    async createNewUser(user) {
        // Check required fields
        if (!user.email || !user.password) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        // Check that user does not already exist
        let userExists = !!(await this.userRepo.count({ email: user.email }));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('user already exists');
        }
        let hashedPassword = await bcrypt.hash(user.password, 10);
        var userToStore = new user_1.User();
        userToStore.firstname = user.firstname;
        userToStore.lastname = user.lastname;
        userToStore.email = user.email;
        userToStore.password = hashedPassword;
        let storedUser = await this.userRepo.create(userToStore);
        storedUser.password = "";
        return storedUser;
    }
    async createNewDriver(driver) {
        // Check required fields
        if (!driver.email || !driver.password) {
            throw new rest_1.HttpErrors.BadRequest('missing data');
        }
        // Check that user does not already exist
        let driverExists = !!(await this.driverRepo.count({ email: driver.email }));
        if (driverExists) {
            throw new rest_1.HttpErrors.BadRequest('driver already exists');
        }
        let hashedPassword = await bcrypt.hash(driver.password, 10);
        var driverToStore = new driver_1.Driver();
        driverToStore.firstname = driver.firstname;
        driverToStore.lastname = driver.lastname;
        driverToStore.email = driver.email;
        driverToStore.password = hashedPassword;
        let storedDriver = await this.driverRepo.create(driverToStore);
        storedDriver.password = "";
        return storedDriver;
    }
};
__decorate([
    rest_1.post('/registerUser'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createNewUser", null);
__decorate([
    rest_1.post('/registerDriver'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [driver_1.Driver]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "createNewDriver", null);
RegistrationController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __param(1, repository_1.repository(driver_repository_1.DriverRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        driver_repository_1.DriverRepository])
], RegistrationController);
exports.RegistrationController = RegistrationController;
//# sourceMappingURL=registration.controller.js.map