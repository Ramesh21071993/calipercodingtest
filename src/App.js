import React from "react";
import { Switch, Route } from "react-router-dom";
import ListProducts from "./screens/ListProducts";
import ProductDetails from "./screens/ProductDetails";
import ProductAction from "./screens/ProductAction";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path="/" component={ListProducts} />
        <Route exact={true} path="/productlist" component={ListProducts} />
        <Route exact={true} path="/productdetails" component={ProductDetails} />
        <Route exact={true} path="/productaction" component={ProductAction} />
      </Switch>
    </div>
  );
};

export default App;
