import React from "react";
import { Link, Route } from "react-router-dom";
import "./index.css";
import PaintingPage from "./Structures/PaintingContainer";


const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const ViewPaintings = () => (
  <div>
    <h2>View Paintings</h2>
  </div>
);

const About = () => (
  <div>
    <h2>Made by Maddi and Pete.</h2>
  </div>
);


export default function App() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ViewPaintings">View Paintings</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Route path="/">
        <Home />
      </Route>
      <Route path="/ViewPaintings">
        <PaintingPage />
      </Route>
      <Route path="/About">
        <About />
      </Route>
    </div>
  );
}

