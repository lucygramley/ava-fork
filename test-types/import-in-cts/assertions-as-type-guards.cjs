"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
const expected = { foo: 'bar' };
(0, main_cjs_1.default)('assert', t => {
    const actual = expected;
    if (t.assert(actual)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('deepEqual', t => {
    const actual = {};
    if (t.deepEqual(actual, expected)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('like', t => {
    const actual = {};
    if (t.like(actual, expected)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('is', t => {
    const actual = 2;
    if (t.is(actual, 3)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('false', t => {
    const actual = true;
    if (t.false(actual)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('falsy', t => {
    const actual = undefined;
    if (t.falsy(actual)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('true', t => {
    const actual = false;
    if (t.true(actual)) {
        (0, tsd_1.expectType)(actual);
    }
});
(0, main_cjs_1.default)('truthy', t => {
    const actual = expected;
    if (t.truthy(actual)) {
        (0, tsd_1.expectType)(actual);
    }
});
