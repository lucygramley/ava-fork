"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_cjs_1 = require("../../../../../entrypoints/main.cjs");
(0, main_cjs_1.default)('top level test title', t => {
    t.snapshot({ foo: 'bar' });
    t.snapshot({ answer: 42 });
});
(0, main_cjs_1.default)('another top level test', t => {
    t.snapshot(new Map());
});
//# sourceMappingURL=test.js.map