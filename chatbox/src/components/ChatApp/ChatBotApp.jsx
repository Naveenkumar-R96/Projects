import React from "react";
import './ChatBotApp.css'
const ChatBotApp = () => {
  return (
    <div className="chat-app">
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className="bx bx-edit-alt new-chat"></i>
        </div>
        <div className="chat-list-item active">
          <h4>Chat 20/07/2024 12.24.45 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 20/07/2024 12.24.45 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 20/07/2024 12.24.45 PM</h4>
          <i className="bx bx-x-circle"></i>
        </div>
      </div>

      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat With AI</h3>
          <i className="bx bx-arrow-back arrow"></i>
        </div>
        <div className="chat">
          <div className="prompt">
            Hi, how are you ? <span>12.58.65 PM</span>
          </div>
          <div className="response">
            Hellow im just a computer i dont have any problem, How can i help to
            you today ? <span>12.58.65 PM</span>
          </div>
          <div className="typing">Typing...</div>
        </div>
        
        <form action="" className="ms-form">
            <i className="fa-solid fa-face-smile emoji"></i>
            <input type="text" className="msg-input" placeholder="Type a message..." />
            <i className="fa-solid fa-paper-plane"></i>
        </form>
      </div>
    </div>
  );
};

export default ChatBotApp;
