import React, { ReactElement, useState, useEffect } from "react";
import "./Chat.css";
import { InfoBar } from "../InfoBar";
import { Input } from "../Input";
import { Messages } from "../Messages";
import queryString from "query-string";
import { io } from "socket.io-client";

interface Props {
  location: any;
}

const ENDPOINT = "localhost:5000";
let socket: any;

export default function Chat({ location }: Props): ReactElement {
  const [name, setName] = useState<string | string[] | null>("");
  const [room, setRoom] = useState<string | string[] | null>("");
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, (error: Error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e: any) => {
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };
  console.log(message, "--", messages);
  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
