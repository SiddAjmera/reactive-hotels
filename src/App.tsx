import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { Error } from "./pages/Error";
import { Home } from "./pages/Home";
import { RoomDetails } from "./pages/RoomDetails";
import { Rooms } from "./pages/Rooms";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:slug" component={RoomDetails} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
