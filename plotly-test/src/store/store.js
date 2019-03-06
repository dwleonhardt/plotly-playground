"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_logger_1 = require("redux-logger");
var root_reducer_1 = require("../reducers/root-reducer");
var store = redux_1.createStore(root_reducer_1.default, redux_1.applyMiddleware(redux_logger_1.default));
exports.default = store;
