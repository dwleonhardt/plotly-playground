"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("./types");
exports.Cats = function (cats) {
    return {
        type: types_1.CATS,
        payload: {
            catData: {
                x: cats.x,
                y: cats.y
            }
        }
    };
};
