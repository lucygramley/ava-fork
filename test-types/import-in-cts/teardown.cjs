"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = __importDefault(require("../../entrypoints/main.cjs"));
(0, main_cjs_1.default)('test', t => {
    t.teardown(() => { }); // eslint-disable-line @typescript-eslint/no-empty-function
    t.teardown(async () => { }); // eslint-disable-line @typescript-eslint/no-empty-function
});
