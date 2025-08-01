"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
main_cjs_1.default.after('return anything else', _t => ({
    foo: 'bar',
    subscribe() { },
    then() { }, // eslint-disable-line unicorn/no-thenable
}));
(0, main_cjs_1.default)('return a promise-like', _t => ({
    then(resolve) {
        resolve?.(); // eslint-disable-line @typescript-eslint/no-floating-promises
    },
}));
(0, main_cjs_1.default)('return a subscribable', _t => ({
    subscribe({ complete }) {
        complete();
    },
}));
