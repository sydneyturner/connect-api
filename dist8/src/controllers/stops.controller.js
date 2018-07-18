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
const stops_repository_1 = require("../repositories/stops.repository");
const rest_1 = require("@loopback/rest");
let StopsController = class StopsController {
    constructor(stopsRepo) {
        this.stopsRepo = stopsRepo;
    }
    // get stops by town route
    async getStopsByTownRoute() {
        var townStops = await this.stopsRepo.find({ where: { route: 'town-route' } });
        return townStops;
    }
    async getAllStops() {
        var allStops = await this.stopsRepo.find();
        return allStops;
    }
};
__decorate([
    rest_1.get('/stops/town-route'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StopsController.prototype, "getStopsByTownRoute", null);
__decorate([
    rest_1.get('/stops'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StopsController.prototype, "getAllStops", null);
StopsController = __decorate([
    __param(0, repository_1.repository(stops_repository_1.StopsRepository.name)),
    __metadata("design:paramtypes", [stops_repository_1.StopsRepository])
], StopsController);
exports.StopsController = StopsController;
//# sourceMappingURL=stops.controller.js.map