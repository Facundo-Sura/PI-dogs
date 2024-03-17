import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <Fragment>
      <div>
        <div>
          <div>
            <Link to="/home">
              <img src="https://raw.githubusercontent.com/GuilloSGit/Henry-PI-Dogs/main/client/src/assets/favicon-32x32.png" alt="a happy dog icon" />
            </Link>
            <div>
              <h1>Woof</h1>
              <p>The dog's page</p>
            </div>
          </div>
          <div>
            <SearchBar />
          </div>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
      </div>
    </Fragment>
  );
}
