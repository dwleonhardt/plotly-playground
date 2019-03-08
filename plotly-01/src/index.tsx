import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import store from './store/store'
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ Home }/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)

registerServiceWorker();
