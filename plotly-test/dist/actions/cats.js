"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
exports.Cats = (cats) => {
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
//# sourceMappingURL=cats.js.map