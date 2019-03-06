"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const redux_logger_1 = require("redux-logger");
const root_reducer_1 = require("../reducers/root-reducer");
const store = redux_1.createStore(root_reducer_1.default, redux_1.applyMiddleware(redux_logger_1.default));
exports.default = store;
//# sourceMappingURL=store.js.map