"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function greet(a, b, c) {
    return (target, propertyKey, descriptor) => {
        let orig = descriptor.value;
        descriptor.value = function () {
            //before
            console.log("before");
            // **let result = orig.apply(this);
            //const t = descriptor.value;//doesnr work
            console.log(`${a} ${this.name} ${b} ${this.age} ${c}`);
            //after
            console.log("after");
            // **return result;
        };
        return descriptor;
    };
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() { console.log(this.name); }
}
__decorate([
    greet('my name is ', ' and I am', ' years old')
], Person.prototype, "talk", null);
const v = new Person("Roni", 43);
v.talk();
