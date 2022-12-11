//יש מערך של אובייקטים
//יש פונציה שיוצרת אובייקטים ומוסיפה למערך
// מעבר ערוצים תקין יש
// בדיקת שם החדק יש

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./rm.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
export default function RoomMenu(props) {
  const [nameRoom, setNameRoom] = useState("");
  const [colorRoom, setColorRoom] = useState("");
  const [selectMenuVal, setSelectMenuVal] = useState("");

  const createRoom = () => {
 let name=nameRoom;
 let color=colorRoom;
 let type=selectMenuVal;
    if (nameRoom.length < 1) {
      alert("eror");
    } else props.set(name,color,type);
  };

  return (
    <div id="ad">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name of the room"
              onChange={(e) => setNameRoom(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>color</Form.Label>
            <Form.Control
              type="text"
              placeholder="Color of the room"
              onChange={(e) => setColorRoom(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>type of room</Form.Label>
            <Form.Select
              defaultValue="choose room"
              onChange={(elem) => setSelectMenuVal(elem.target.value)}
            >
              <option> choose room</option>
              <option value="bedroom">bedroom</option>
              <option value="bathroom">bathroom</option>
              <option value="kitchen">kitchen</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Link to="/">
          <Button
            variant="info"
            onClick={() => {
              createRoom();
            }}
          >
            add room
          </Button>{" "}
        </Link>
      </Form>
    </div>
  );
}
