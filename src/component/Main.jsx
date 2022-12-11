import React from "react";
import { Consumer } from "../ContextApi";
import { Link } from "react-router-dom";
import "./main.css";

export default function Main(props) {
  const choosenRoom = (ele) => {
    props.setRoom(ele);
  };

  return (
    <div id="homeDive">
      <Consumer>
        {(val) => {
          return val.map((ele, i) => {
            return (
              <Link to="/room">
                <div
                  className="room"
                  onClick={() => choosenRoom(ele)}
                  style={{ backgroundColor: ele.ColorOftheRoom }}
                >
                  <p> {ele.nameOftheRoom}</p>
                </div>
              </Link>
            );
          });
        }}
      </Consumer>
    </div>
  );
}
