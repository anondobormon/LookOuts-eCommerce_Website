import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./component/About/About";
import { Cart } from "./component/Cart/Cart";
import { Checkout } from "./component/Checkout/Checkout";
import { Contact } from "./component/Contact/Contact";
import { Home } from "./component/Home";
import { Login } from "./component/LoginResister/Login";
import { Resister } from "./component/LoginResister/Resister";
import { NotFound } from "./component/NotFound.js/NotFound";
import { Notification } from "./component/Notification/Notification";
import { PrivetRoute } from "./component/PrivetRoute/PrivetRoute";
import { ProductShow } from "./component/Product/ProductShow";
import { UserProfile } from "./component/Profile/UserProfile";
import { SingleProduct } from "./component/SingleProduct/SingleProduct";

export const UserContext = createContext();
export const OrderContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [order, setOrder] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <OrderContext.Provider value={[order, setOrder]}>
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
            <Route exact path="/products">
              <ProductShow />
            </Route>
            <PrivetRoute exact path="/profile">
              <UserProfile />
            </PrivetRoute>
            {/* <Route exact path="/admin">
          <AdminProfile />
        </Route> */}
            <PrivetRoute exact path="/checkout">
              <Checkout />
            </PrivetRoute>
            <PrivetRoute exact path="/product/:id">
              <SingleProduct />
            </PrivetRoute>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/resister">
              <Resister />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </OrderContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
