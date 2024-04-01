"use client";
import React from "react";

function Chat({ messages }) {
  const filteredMessages = messages.filter(
    (message) => !message.message_text.includes("||||")
  );

  return (
    <div className="flex flex-col justify-center text-white p-4 relative w-full h-screen ">
      <div className="w-full flex flex-col overflow-y-auto border border-white rounded-lg">
        {/* Mostrar mensajes */}
        {filteredMessages.map((message) => (
          <div key={message.id} className="flex flex-col p-2 h-4/4">
            {/* Renderizar cada mensaje */}
            <div
              className={`flex flex-col ${
                message.sender_name === "bot" ? "items-end" : "items-start"
              }`}
            >
              <div className="rounded bg-chat p-2">
                <p>{message.message_text}</p>
              </div>
              <p>{message.sender_name}</p>
            </div>
          </div>
        ))}
        <form className="absolute bottom-4 flex flex-row justify-center w-full gap-x-2">
          <input
            type="text"
            placeholder="Type 'Hello' to start a chat.."
            className="border-gray-500 border-2 bg-transparent rounded-lg w-3/4 h-10 p-2"
          />
          <button
            className="border-2 bg-topbar rounded-lg w-10 justify-center items-center flex h-10"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-up-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
