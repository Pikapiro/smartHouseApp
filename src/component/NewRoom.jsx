import React from "react";
import "./room.css";
export default function Room(props) {
  let co = props.color;

  return (
    <div className="roomDiv" style={{ backgroundColor: co }}>
      <h3>name of the room:{props.name}</h3>
    </div>
  );
}
