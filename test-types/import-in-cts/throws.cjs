"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
class CustomError extends Error {
    foo;
    constructor() {
        super();
        this.foo = 'foo';
    }
}
(0, main_cjs_1.default)('throws', t => {
    const error1 = t.throws(() => { });
    (0, tsd_1.expectType)(error1);
    const error2 = t.throws(() => { });
    (0, tsd_1.expectType)(error2);
    (0, tsd_1.expectType)(t.throws(() => { }));
    const error3 = t.throws(() => { }, { instanceOf: CustomError });
    (0, tsd_1.expectType)(error3);
    const error4 = t.throws(() => { }, { is: new CustomError() });
    (0, tsd_1.expectType)(error4);
    const error5 = t.throws(() => { }, { instanceOf: CustomError, is: new CustomError() });
    (0, tsd_1.expectType)(error5);
    const error6 = t.throws(() => { throw 'foo'; }, { any: true });
    (0, tsd_1.expectType)(error6);
    // @ts-expect-error TS2769
    (0, tsd_1.expectError)(t.throws(() => { throw 'foo'; }, { instanceOf: String, is: 'foo' }));
});
(0, main_cjs_1.default)('throwsAsync', async (t) => {
    const error1 = await t.throwsAsync(async () => { });
    (0, tsd_1.expectType)(error1);
    (0, tsd_1.expectType)(await t.throwsAsync(async () => { }));
    const error2 = await t.throwsAsync(Promise.reject());
    (0, tsd_1.expectType)(error2);
    (0, tsd_1.expectType)(await t.throwsAsync(Promise.reject()));
    const error3 = await t.throwsAsync(async () => { }, { instanceOf: CustomError });
    (0, tsd_1.expectType)(error3);
    const error4 = await t.throwsAsync(async () => { }, { is: new CustomError() });
    (0, tsd_1.expectType)(error4);
    const error5 = await t.throwsAsync(async () => { }, { instanceOf: CustomError, is: new CustomError() });
    (0, tsd_1.expectType)(error5);
    const error6 = await t.throwsAsync(async () => { throw 'foo'; }, { any: true });
    (0, tsd_1.expectType)(error6);
    // @ts-expect-error TS2769
    (0, tsd_1.expectError)(t.throwsAsync(async () => { throw 'foo'; }, { instanceOf: String, is: 'foo' }));
});
