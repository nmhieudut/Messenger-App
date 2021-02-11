import React from "react";
import "./Input.css";
interface indexProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (e: any) => void;
}

export const Input: React.FC<indexProps> = ({
  message,
  setMessage,
  sendMessage,
}) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="type a message..."
        value={message}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="sendButton"
        onClick={(e) => {
          e.preventDefault();
          sendMessage(e);
        }}
      >
        Send
      </button>
    </form>
  );
};
