"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
(0, main_cjs_1.default)('like', t => {
    t.like({
        map: new Map([['foo', 'bar']]),
        nested: {
            baz: 'thud',
            qux: 'quux',
        },
    }, {
        map: new Map([['foo', 'bar']]),
        nested: {
            baz: 'thud',
        },
    });
    const foo = { bar: 'bar' };
    const { foo: _, ...expected } = foo;
    t.like(expected, { bar: 'bar' });
});
