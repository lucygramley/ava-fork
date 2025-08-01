"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
(0, main_cjs_1.default)('attempt', async (t) => {
    const attempt = await t.try((u, a, b) => {
        (0, tsd_1.expectType)(u);
        (0, tsd_1.expectType)(a);
        (0, tsd_1.expectType)(b);
    }, 'string', 6);
    attempt.commit();
});
(0, main_cjs_1.default)('attempt with title', async (t) => {
    const attempt = await t.try('attempt title', (u, a, b) => {
        (0, tsd_1.expectType)(u);
        (0, tsd_1.expectType)(a);
        (0, tsd_1.expectType)(b);
    }, 'string', 6);
    attempt.commit();
});
const lengthCheck = (t, a, b) => {
    t.is(a.length, b);
};
(0, main_cjs_1.default)('attempt with helper', async (t) => {
    const attempt = await t.try(lengthCheck, 'string', 6);
    attempt.commit();
});
(0, main_cjs_1.default)('attempt with title', async (t) => {
    const attempt = await t.try('title', lengthCheck, 'string', 6);
    attempt.commit();
});
(0, main_cjs_1.default)('all possible variants to pass to t.try', async (t) => {
    // No params
    void t.try(tt => tt.pass());
    void t.try('test', tt => tt.pass());
    // Some params
    void t.try((tt, a, b) => tt.is(a.length, b), 'hello', 5);
    void t.try('test', (tt, a, b) => tt.is(a.length, b), 'hello', 5);
    // Macro with title
    const macro1 = main_cjs_1.default.macro({
        exec: (tt, a, b) => tt.is(a.length, b),
        title: (title, a, b) => `${title ? `${String(title)} ` : ''}str: "${String(a)}" with len: "${String(b)}"`,
    });
    const macro2 = main_cjs_1.default.macro((tt, a, b) => tt.is(a.slice(b), ''));
    void t.try(macro1, 'hello', 5);
    void t.try(macro2, 'hello', 5);
    void t.try('title', macro1, 'hello', 5);
    void t.try('title', macro2, 'hello', 5);
});
