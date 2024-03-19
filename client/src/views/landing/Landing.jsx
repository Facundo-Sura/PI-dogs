import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default function Landing() {
  return (
    <Fragment>
      <div className="landing-contenedor">
        <h1 className="landing-title">Bienvenido a Dogs App</h1>
        <Link to='/home'>
          <button className="home-button">Home</button>
        </Link>
      </div>
    </Fragment>
  );
}
