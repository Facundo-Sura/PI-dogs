import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <Fragment>
      <div>
        <h1>Welcome to Woof</h1>
        <Link to="/home">
          <button>Let's Woof</button>
        </Link>
      </div>
    </Fragment>
  );
}
