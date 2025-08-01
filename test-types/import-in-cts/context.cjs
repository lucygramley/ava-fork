"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
const test = main_cjs_1.default;
const macro = test.macro((t, _expected) => {
    (0, tsd_1.expectType)(t.context.foo);
});
test.beforeEach(t => {
    (0, tsd_1.expectType)(t.context);
});
// @ts-expect-error TS2769
(0, tsd_1.expectError)(test('foo is bar', macro, 'bar')); // eslint-disable-line @typescript-eslint/no-confusing-void-expression
(0, main_cjs_1.default)('default context is unknown', t => {
    (0, tsd_1.expectType)(t.context);
});
const test2 = main_cjs_1.default;
const hook = (_t) => { };
test2.beforeEach(hook);
