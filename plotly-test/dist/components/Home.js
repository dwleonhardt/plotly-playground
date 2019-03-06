"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_plotly_js_1 = require("react-plotly.js");
class Home extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(react_plotly_js_1.default, { data: [
                    {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'points',
                        marker: { color: 'red' },
                    }
                ], layout: { width: 320, height: 240, title: 'A Fancy Plot' } })));
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map