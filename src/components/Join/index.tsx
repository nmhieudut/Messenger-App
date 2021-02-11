import React, { ReactElement, useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

interface Props {}

export default function Join(Props: Props): ReactElement {
  const [name, setName] = useState<string>("");
  const [room, setRoom] = useState<string>("");

  const onChangeText = (e: any) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "room") {
      setRoom(e.target.value);
    } else return;
  };

  const checkIfRoomsOrNamesExist = (e: React.MouseEvent) => {
    return !name || !room ? e.preventDefault() : null;
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            onChange={(e) => onChangeText(e)}
            name="name"
            placeholder="Name"
            type="text"
            className="joinInput"
            value={name}
          />
        </div>
        <div>
          <input
            onChange={(e) => onChangeText(e)}
            placeholder="Room"
            name="room"
            type="text"
            className="joinInput mt-20"
            value={room}
          />
        </div>
        <Link
          onClick={(e) => checkIfRoomsOrNamesExist(e)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
