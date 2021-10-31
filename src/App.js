import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./component/About/About";
import { Contact } from "./component/Contact/Contact";
import { Home } from "./component/Home";
import { NotFound } from "./component/NotFound.js/NotFound";
import { ProductShow } from "./component/Product/ProductShow";

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

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
