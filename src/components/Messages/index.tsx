import React, { useEffect, useRef } from "react";

interface indexProps {
  messages: string[];
}

export const Messages: React.FC<indexProps> = ({ messages }) => {
  const messagesContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainer.current) {
      messagesContainer.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      {messages.map((message, i) => {
        <div key={i}>{message}</div>;
      })}
      <div ref={messagesContainer} />
    </div>
  );
};
