import React from "react";
import "./title.css";
import pic from "./logo/Dani's.png";

export default function Titel() {
  return (
    <div id="tDiv">
      <br />
      <br />
      <img id="logo" src={pic} alt="" width="190" height="170" />
      <h1 id="t"> Smart-house</h1>
    </div>
  );
}
