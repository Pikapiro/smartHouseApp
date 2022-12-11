//מעבר ערוצים יש
// כותרת יש
// יש חדר עם אובייקט
// יש כפתור להדליק ולכבות

import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Titel from "./component/Titel";
import RoomMenu from "./component/RoomMenu";
import Main from "./component/Main";
import SelectedRoom from "./component/SelectedRoom";
import Plus from "./component/Plus";
import { Provider } from "./ContextApi";

function App() {
  const [roomsArr, setRoomsArr] = useState([]);
  const [selctedRoom, setSelectedRoom] = useState({});
  const [onAndOff, setOnAndOff] = useState(false);
  
  
  const switchOn = () => {
    if (onAndOff == true) {
    
      selctedRoom.divices .forEach((ele,i)=> {
      
      });
      selctedRoom.divices = "green";
    } else selctedRoom.onAndOff = "red";
  };

  const add = (name,type,color) => {

let newRoom=new Room(name,type,color)


    setRoomsArr([...roomsArr, newRoom]);
  };

  const selctRoom = (room) => {
    setSelectedRoom(room);
  };

  const addDevice = (divice, room) => {
let newDivice=new Divice(divice)

    setRoomsArr([
      ...roomsArr.map((r,i) => {
        if (r === room) {
          if (
            (r.divices.some((i) => i === "Stereo") && newDivice === "Stereo") ||
            (r.typeOfTheRoom !== "bathroom" && newDivice == "water-heater") ||
            r.divices.length === 5
          ) {
            alert("ERROR");
          } else {
            r.divices = [...r.divices, newDivice];
          }
        }
        return r;
      }),
    ]);
  };

  return (
    <div className="App">
      <Titel />
      <BrowserRouter>
        <Provider value={roomsArr}>
          <Routes>
            <Route path="/" element={<Main setRoom={selctRoom} />} />

            <Route path="/addroom" element={<RoomMenu set={add} />} />
            <Route
              path="/room"
              element={
                <SelectedRoom
                  room={selctedRoom}
                  addItem={addDevice}
                  set={setOnAndOff}
                  b={onAndOff}
                  f={switchOn}
                />
              }
            />
          </Routes>
        </Provider>
        <Plus />
      </BrowserRouter>
    </div>
  );
}

export default App;


class Room{
divices=[]

constructor(nameOftheRoom,ColorOftheRoom,typeOfTheRoom){

this.nameOftheRoom=nameOftheRoom;
this.ColorOftheRoom=ColorOftheRoom;
this.typeOfTheRoom=typeOfTheRoom;

}

}
class Divice{
  swich='red'
  constructor(nameOFDivice){

    this.nameOFDivice=nameOFDivice
  }
}

