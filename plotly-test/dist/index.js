"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const store_1 = require("./store/store");
const react_router_dom_1 = require("react-router-dom");
const Home_1 = require("./components/Home");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_dom_1.BrowserRouter, null,
        React.createElement("div", null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default })))), document.getElementById("root"));
//# sourceMappingURL=index.js.map