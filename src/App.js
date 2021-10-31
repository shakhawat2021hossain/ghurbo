import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import AddService from "./components/addService/AddService";
import Login from "./components/login/Login";
import AuthProvider from "./context/AuthProvider";
import Booking from "./components/booking/Booking";
import PrivateRoute from "./components/private/PrivateRoute";
import NotFound from "./components/notFound/NotFound";
import { Placeholder } from "react-bootstrap";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import AllOrders from "./components/manageAll/AllOrders";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/booking/:offerId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <Route path="/*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
