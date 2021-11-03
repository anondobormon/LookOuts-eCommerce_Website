import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./component/About/About";
import { AdminProfile } from "./component/AdminDashboard/AdminProfile";
import { Cart } from "./component/Cart/Cart";
import { Checkout } from "./component/Checkout/Checkout";
import { Contact } from "./component/Contact/Contact";
import { Home } from "./component/Home";
import { NotFound } from "./component/NotFound.js/NotFound";
import { ProductShow } from "./component/Product/ProductShow";
import { UserProfile } from "./component/Profile/UserProfile";
import { SingleProduct } from "./component/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/product">
          <ProductShow />
        </Route>
        <Route exact path="/profile">
          <UserProfile />
        </Route>
        <Route exact path="/admin">
          <AdminProfile />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/single-product">
          <SingleProduct />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
