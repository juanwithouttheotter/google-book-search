import React from "react";
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav activeKey="/">
            <Nav.Item>
              <Nav.Link className="m-auto" href="/search">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="m-auto" href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="m-auto" href="/saved">Saved</Nav.Link>
            </Nav.Item>
        </Nav>
      <div className="App-header">
        <h2>Google Books Search</h2>
        <h3>Search and Save Books of Interest!</h3>
        
      </div>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}


export default App;
