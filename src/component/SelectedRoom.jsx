//מוסיף מכשירים למערך
// מראה ומעלים את הדיב של ההוספת מכשירים
// מוסיף מכשירים לפי הדרישות

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./divice.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function SelectedRoom(props) {
  let room = props.room;
  const [deviceSelcted, setDeviceSelcted] = useState("");
  const [eror, setEror] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const reveleDiv = () => {
    if (showDiv == true) {
      return (
        <div>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Choose divice</Form.Label>
                <Form.Select
                  defaultValue=" choose divice"
                  onChange={(elem) => setDeviceSelcted(elem.target.value)}
                >
                  <option>Choose divice</option>
                  <option value="air-conditioner">air conditioner</option>
                  <option value="water-heater">water heater</option>
                  <option value="Stereo">Stereo</option>
                  <option value="lamp">lamp</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Button
              variant="info"
              onClick={() => {
                add();
              }}
            >
              add{" "}
            </Button>{" "}
          </Form>
        </div>
      );
    }
  };

  const add = () => {
    props.addItem(deviceSelcted, room);
    setShowDiv(false);
  };

  return (
    <div id="sl">
      <h3>Name :{room.nameOftheRoom}</h3>
      <h4> Type: {room.typeOfTheRoom}</h4>
      <br />

      <Button
        variant="info"
        onClick={() => {
          setShowDiv(true);
        }}
      >
        {" "}
        add Device
      </Button>
      <Link to="/">
        {" "}
        <Button variant="info">back</Button>{" "}
      </Link>
      {reveleDiv()}
      {props.f()}
      <br />
      <br />
      <div id="divi">
        {room.divices.map((ele,i) => {
          return (
            <div className="divice" id={i}>
              <div
                className="onoff"
                style={{ backgroundColor: "red"}}
                onClick={() => {
                  props.set(!props.b);
                }}
              ></div>

              <p id="par">{ele}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
