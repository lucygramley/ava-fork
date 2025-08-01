"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_cjs_1 = require("../../../../../../entrypoints/main.cjs");
(0, main_cjs_1.default)('test title', function (t) {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 43 });
});
(0, main_cjs_1.default)('another test', function (t) {
    t.snapshot(new Map());
});
