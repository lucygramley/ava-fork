"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
const tsd_1 = require("tsd");
(0, main_cjs_1.default)('snapshot', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot(null, 'a snapshot with a message');
    // @ts-expect-error TS2345
    (0, tsd_1.expectError)(t.snapshot('hello world', null)); // eslint-disable-line @typescript-eslint/no-confusing-void-expression
});
(0, main_cjs_1.default)('snapshot.skip', t => {
    t.snapshot.skip({ foo: 'bar' });
    t.snapshot.skip(null, 'a snapshot with a message');
    // @ts-expect-error TS2345
    (0, tsd_1.expectError)(t.snapshot.skip('hello world', null)); // eslint-disable-line @typescript-eslint/no-confusing-void-expression
});
