"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = __importDefault(require("ava/plugin"));
const tsd_1 = require("tsd");
(0, tsd_1.expectType)(plugin_1.default.registerSharedWorker({ filename: '', supportedProtocols: ['ava-4'] }));
const factory = ({ negotiateProtocol }) => {
    const protocol = negotiateProtocol(['ava-4']);
    (0, tsd_1.expectType)(protocol);
    (async () => {
        for await (const w of protocol.testWorkers()) {
            (0, tsd_1.expectType)(w.teardown(() => { })); // eslint-disable-line @typescript-eslint/no-empty-function
            (0, tsd_1.expectType)(w.teardown(async () => { })); // eslint-disable-line @typescript-eslint/no-empty-function
        }
    })();
};
exports.default = factory;
