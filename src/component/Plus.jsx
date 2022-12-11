import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ad.css";

export default function Plus() {
  return (
    <div id="add" style={{ backgroundColor: "#F1EFDC" }}>
      <Link to="/addroom">
        <Button id="bt" variant="secondary" size="200px">
          +
        </Button>
      </Link>
      <div id="pas"></div>
    </div>
  );
}
