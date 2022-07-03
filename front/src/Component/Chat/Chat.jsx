import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import "./Chat.css";

function Chat() {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3001`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div>
      <header className="chat-header">React Chat</header>
      {socket ? (
        <div className="chat-container">
          <Messages socket={socket} />
          <MessageInput socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
    </div>
  );
}

export default Chat;
