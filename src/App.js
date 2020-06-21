import React from "react";
import "./style/main.scss";
import { API } from "./url/API";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./view/Home";
import Grass from "./view/Grass";
import Contact from "./view/Contact";
import ApiContextProvider from "./context/ApiContext";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/grass" component={Grass} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </Router>
      </ApiContextProvider>
    </div>
  );
}

export default App;
