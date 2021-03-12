import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import Product from "./components/pages/Product";
import ScrollTop from "./function/ScrollTop";
import ProductDetail from "./components/pages/ProductDetail";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import MyAccount from "./components/pages/MyAccount";
import WishList from "./components/pages/WishList";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" exact component={Product} />
          <Route path="/product-detail" exact component={ProductDetail} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/my-account" exact component={MyAccount} />
          <Route path="/wishlist" exact component={WishList} />
        </Switch>
        <ScrollTop />
        <Footer />
      </Router>
    </>
  );
}

export default App;
