import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";
import { MovieDetail } from "./components/MovieDetail";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/movie/:id" exact>
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
