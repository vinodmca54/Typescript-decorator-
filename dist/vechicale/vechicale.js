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
function modifyname(target, propertyKey, propDesc) {
    console.log(target);
    console.log(propertyKey);
    console.log(propDesc);
    let oldbikename = propDesc.value;
    console.log(oldbikename);
    propDesc.value = function () {
        return "Duke";
    };
    return propDesc;
}
class vechicale {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    myName() {
        return this.name;
    }
    myPrice() {
        return this.price;
    }
}
__decorate([
    modifyname,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], vechicale.prototype, "myName", null);
exports.vechicale = vechicale;
//# sourceMappingURL=vechicale.js.map