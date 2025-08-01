"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-lone-blocks */
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
// Typed arguments through generics.
{
    const hasLength = main_cjs_1.default.macro((t, input, expected) => {
        (0, tsd_1.expectType)(input);
        (0, tsd_1.expectType)(expected);
        // @ts-expect-error TS2345
        t.is(input, expected);
    });
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
{
    const hasLength = main_cjs_1.default.macro({
        exec(t, input, expected) {
            (0, tsd_1.expectType)(input);
            (0, tsd_1.expectType)(expected);
            // @ts-expect-error TS2345
            t.is(input, expected);
        },
        title(_providedTitle, input, expected) {
            (0, tsd_1.expectType)(input);
            (0, tsd_1.expectType)(expected);
            return 'title';
        },
    });
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
// Typed arguments in execution function.
{
    const hasLength = main_cjs_1.default.macro((t, input, expected) => {
        // @ts-expect-error TS2345
        t.is(input, expected);
    });
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
{
    const hasLength = main_cjs_1.default.macro({
        exec(t, input, expected) {
            // @ts-expect-error TS2345
            t.is(input, expected);
        },
        title(_providedTitle, input, expected) {
            (0, tsd_1.expectType)(input);
            (0, tsd_1.expectType)(expected);
            return 'title';
        },
    });
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
// Untyped arguments
{
    const hasLength = main_cjs_1.default.macro((t, input, expected) => {
        (0, tsd_1.expectType)(input);
        (0, tsd_1.expectType)(expected);
        t.is(input, expected);
    });
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
// Usable without title, even if the macro lacks a title function.
{
    const hasLength = main_cjs_1.default.macro((t, input, expected) => {
        // @ts-expect-error TS2345
        t.is(input, expected);
    });
    (0, main_cjs_1.default)(hasLength, 'bar', 3);
}
// No arguments
{
    const pass = main_cjs_1.default.macro({
        exec(_t, ...args) {
            (0, tsd_1.expectType)(args); // eslint-disable-line @typescript-eslint/ban-types
        },
        title(providedTitle, ...args) {
            (0, tsd_1.expectType)(providedTitle);
            (0, tsd_1.expectType)(args); // eslint-disable-line @typescript-eslint/ban-types
            return '';
        },
    });
    (0, main_cjs_1.default)(pass);
}
// Without test.macro()
{
    const hasLength = (t, input, expected) => {
        t.is(input.length, expected);
    };
    (0, main_cjs_1.default)('bar has length 3', hasLength, 'bar', 3);
}
// Inline function with explicit argument types.
(0, main_cjs_1.default)('has length 3', (t, input, expected) => {
    // @ts-expect-error TS2345
    t.is(input, expected);
}, 'bar', 3);
// Completely inferred arguments for inline functions.
(0, main_cjs_1.default)('has length 3', (t, input, expected) => {
    (0, tsd_1.expectType)(input);
    (0, tsd_1.expectType)(expected);
    // @ts-expect-error TS2345
    t.is(input, expected);
}, 'foo', 3);
main_cjs_1.default.skip('skip', (t, input, expected) => {
    (0, tsd_1.expectType)(input);
    (0, tsd_1.expectType)(expected);
    // @ts-expect-error TS2345
    t.is(input, expected);
}, 'foo', 3);
