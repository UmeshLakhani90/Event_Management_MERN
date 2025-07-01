import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import './Chat.css';

const socket = io("http://localhost:5000");

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setChat((prev) => [...prev, data]);
//     });
//   }, []);

// useEffect(() => {
//   socket.on("receive_message", (data) => {
//     setChat((prevChat) => [...prevChat, `👤 Friend: ${data}`]);
//   });

//   return () => socket.off("receive_message");
// }, []);

useEffect(() => {
  socket.on("receive_message", (data) => {
    const isMe = data.senderId === socket.id;
    const prefix = isMe ? "🧑 You: " : "👤 Friend: ";
    setChat((prevChat) => [...prevChat, `${prefix}${data.text}`]);
  });

  return () => socket.off("receive_message");
}, []);

const sendMessage = () => {
  if (message.trim()) {
    socket.emit("send_message", message);
    setMessage(""); // don't push your own message — wait for server response
  }
};

// const sendMessage = () => {
//   if (message.trim()) {
//     socket.emit("send_message", message); // send to server
//     setChat((prevChat) => [...prevChat, `🧑 You: ${message}`]); // local view
//     setMessage("");
//   }
// };




//   const sendMessage = () => {
//     if (message.trim()) {
//       socket.emit("send_message", message);
//       setChat([...chat, message]);
//       setMessage("");
//     }
//   };

  return (
    <div className="chat-container">
      <h2>💬 Real-Time Chat</h2>
      <div className="chat-box">
        {chat.map((msg, index) => (
          <div className="chat-bubble" key={index}>
            <span className="chat-text">{msg}</span>
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
