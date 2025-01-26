import React, { useState } from "react";
import "./ChatBotApp.css";
const ChatBotApp = ({ onGoBack, chats, setChats }) => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState(chats[0]?.messages || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
   
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };
  const sendMessage = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newMessage = {
      type: "prompt",
      text: inputValue,
      timestamp: new Date().toLocaleTimeString(),
    };

    const updatedMessages = [...messages, newMessage];

    setMessages([...messages, newMessage]);
    setInputValue("");

    const udatedChats = chats.map((chat, index) => {
      if (index === 0) {
        return {
          ...chat,
          messages: updatedMessages,
        };
      }
      return chat;
    });

    setChats(udatedChats);
  };

  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        {chats.map((chat, index) => {
          return (
            <div
              className={`chat-list-item active ${index === 0 ? "active" : ""}`}
              key={index}
            >
              <h4>{chat.id}</h4>
              <i className="bx bx-x-circle"></i>
            </div>
          );
        })}
      </div>

      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat With AI</h3>
          <i className="bx bx-arrow-back arrow" onClick={onGoBack}></i>
        </div>
        <div className="chat">
          {messages.map((message, index) => {
            return (
              <div
                key={index}
                className={message.type === "prompt" ? "prompt" : "response"}
              >
                {message.text} <span>{message.timestamp}</span>
              </div>
            );
          })}

          <div className="typing">Typing...</div>
        </div>

        <form
          action=""
          className="ms-form"
          onSubmit={(e) => e.preventDefault()
            
          }
        >
          <i className="fa-solid fa-face-smile emoji"></i>
          <input
            type="text"
            className="msg-input"
            placeholder="Type a message..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <i className="fa-solid fa-paper-plane" onClick={sendMessage} ></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
