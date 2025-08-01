"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
(0, main_cjs_1.default)('actual extends expected', t => {
    const expected = { foo: [1, 2, 3] };
    const actual = { foo: [1, 2, 3] };
    if (t.deepEqual(actual, expected)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('expected extends actual', t => {
    const expected = { foo: [1, 2, 3] };
    const actual = { foo: [1, 2, 3] };
    if (t.deepEqual(actual, expected)) {
        (0, tsd_1.expectType)(expected);
    }
});
(0, main_cjs_1.default)('neither extends the each other', t => {
    const expected = { foo: [1, 2, 3] };
    const actual = { foo: [1, 2, 3] };
    t.deepEqual(actual, expected);
});
