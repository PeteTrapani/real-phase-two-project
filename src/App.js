import React from "react";
import { Link, Route } from "react-router-dom";
import "./index.css";
import PaintingPage from "./Structures/PaintingContainer";

const Home = () => (
  <div>
    <h2> </h2>
  </div>
);

const ViewPaintings = () => (
  <div>
    <h2>View Paintings</h2>
  </div>
);

const About = () => (
  <div>
    <h2 className="text-format2">Made by Maddi and Pete.</h2>
    <img
      className="image-center"
      src="https://media.tenor.com/zio4hRalHYIAAAAC/hi-wave.gif"
      alt="Waving"
    />
  </div>
);

export default function App() {
  return (
    <div>
      <nav>
        <ul className="bullet">
          <li className="text-format">
            <Link to="/">
              <a className="a">Home</a>
            </Link>
          </li>
          <li className="text-format">
            <Link to="/ViewPaintings">
              <a className="a">View Paintings</a>
            </Link>
          </li>
          <li className="text-format">
            <Link to="/about">
              <a className="a">About</a>
            </Link>
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
