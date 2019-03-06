"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var store_1 = require("./store/store");
var react_router_dom_1 = require("react-router-dom");
var Home_1 = require("./components/Home");
ReactDOM.render(<react_redux_1.Provider store={store_1.default}>
    <react_router_dom_1.BrowserRouter>
      <div>
        <react_router_dom_1.Route exact path="/" component={Home_1.default}/>
      </div>
    </react_router_dom_1.BrowserRouter>
  </react_redux_1.Provider>, document.getElementById("root"));
