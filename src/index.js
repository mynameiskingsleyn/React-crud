import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

import NotFound from "./Components/NotFound";
import AddProduct from "./Components/AddProduct";
import EditProduct from "./Components/EditProduct";
import ShowProduct from "./Components/ShowProduct";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <div>
            <switch>
                <Route exact path="/" component = {App} />
                <Route  path="/create" component={AddProduct}> </Route>
                <Route  path="/show:id" component={ShowProduct}> </Route>
                <Route  path="/edit:id" component={EditProduct}> </Route>
            </switch>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
