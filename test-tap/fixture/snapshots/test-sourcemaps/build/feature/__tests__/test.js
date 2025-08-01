"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = require("../../../../../../../entrypoints/main.cjs");
(0, main_cjs_1.default)('feature test title', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 40 });
});
(0, main_cjs_1.default)('another feature test', t => {
    t.snapshot(new Map());
});
//# sourceMappingURL=test.js.map