"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
let Routes = class Routes extends repository_1.Entity {
    getId() {
        return this.id;
    }
};
__decorate([
    repository_1.property({
        type: 'number',
        id: true
    }),
    __metadata("design:type", Number)
], Routes.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        length: 10,
        required: true
    }),
    __metadata("design:type", Number)
], Routes.prototype, "lat", void 0);
__decorate([
    repository_1.property({
        type: 'number',
        length: 10,
        required: true
    }),
    __metadata("design:type", Number)
], Routes.prototype, "lng", void 0);
Routes = __decorate([
    repository_1.model()
], Routes);
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map