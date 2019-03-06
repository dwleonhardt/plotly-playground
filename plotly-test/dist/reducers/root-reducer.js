"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../actions/types");
const INITIAL_STATE = {
    CATS: 1
};
exports.default = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types_1.CATS:
            return Object.assign({}, state, { userName: action.payload });
        default:
            return state;
    }
};
//# sourceMappingURL=root-reducer.js.map