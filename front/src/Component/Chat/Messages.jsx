import React, { useEffect, useState } from "react";
import { UseSession } from "../../Context/Session";
import "./Messages.css";

function Messages({ socket }) {
  const session = UseSession();
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const messageListener = async (message) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        newMessages[message.id] = message;
        return newMessages;
      });
    };

    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[messageID];
        return newMessages;
      });
    };

    socket.on("message", messageListener);
    socket.on("deleteMessage", deleteMessageListener);
    socket.emit("getMessages");
    return () => {
      socket.off("message", messageListener);
      socket.off("deleteMessage", deleteMessageListener);
    };
  }, [socket]);

  useEffect(() => {
    const empt = {};
    setMessages(empt);
  }, [session.session.userId]);

  return (
    <div className="message-list">
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div
            key={message.id}
            className={
              (message.user.name === `Recipe4U`
                ? `systemMessage`
                : `userMessage`) + " message-container"
            }
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
          >
            {/* <span className="user">{message.user.name}:</span> */}
            <div className="message">
              {message.user.name}:<br />
              {message.value.split("\n").map((m, index) => (
                <span key={index}>
                  {m}
                  <br key={index} />
                </span>
              ))}
              {new Date(message.time).toLocaleTimeString()}
            </div>
            {/* <span className="date">
              {new Date(message.time).toLocaleTimeString()}
            </span> */}
          </div>
        ))}
    </div>
  );
}

export default Messages;
