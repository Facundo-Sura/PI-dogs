import React from "react";
import { Fragment } from "react";
import SideBar from "../SideBar/SideBar";
import DogArea from "../DogArea/DogArea";
import NavBar from "../NavBar/NavBar";

export default function Home() {
  return (
    <Fragment>
      <div>
        <NavBar />
        <SideBar />
        <DogArea />
      </div>
    </Fragment>
  );
}
