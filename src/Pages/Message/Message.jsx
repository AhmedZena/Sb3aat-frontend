import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState(""); // State to hold the new message
  const { user } = useSelector((state) => state.user); // Getting user object using useSelector
  let { id } = useParams();

  // Define senderId outside of useEffect
  const senderId = user ? user._id : null;

  useEffect(() => {
    if (user) { // Ensuring user object is defined
      // Data to be sent in the request body
      const requestData = {
        sender: senderId,
        receiver: id
      };

      // Fetch messages from the backend
      axios.post("https://sb3aat.onrender.com/api/conversations/messages", requestData)
        .then((response) => {
 
          setMessages(response.data.messages);
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
     
          setLoading(false);
        });
    }
  }, [messages]); 

  // Function to handle sending messages
  const sendMessage = () => {
    // Check if the new message is not empty
    if (newMessage.trim() !== "") {
      // Data to be sent in the request body
      const requestData = {
        sender: senderId,
        receiver: receiverId,
        text: newMessage // Add the new message to the request body
      };

      // Send the new message to the backend
      axios.post("https://sb3aat.onrender.com/api/conversations/sendMessage", requestData)
        .then((response) => {
          // Update the messages state with the new message
          setMessages([...messages, response.data.message]);
          // Clear the input field after sending the message
          setNewMessage("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex h-[800px] w-screen container mx-auto antialiased text-gray-800">
      <div className="flex flex-row w-full h-full overflow-x-hidden">
        <div className="flex flex-col flex-shrink-0 w-64 py-8 pl-6 pr-2 bg-white">
          {/* Sidebar content */}
        </div>
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 h-full p-4 bg-gray-100 rounded-2xl">
            <div className="flex flex-col h-full mb-4 overflow-x-auto">
              <div className="flex flex-col h-full">
                {/* Render messages */}
                {loading ? (
                  <p>Loading messages...</p>
                ) : messages.length > 0 ? (
                  <div className="grid grid-cols-12 gap-y-2">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`${
                          message.sender === senderId ? "col-start-1 col-end-8" : "col-start-6 col-end-13"
                        } p-3 rounded-lg`}
                      >
                        <div className={`flex flex-row items-center ${message.sender === senderId ? "" : "justify-start flex-row-reverse"}`}>
                          <div
                            className={`flex items-center justify-center h-10 w-10 rounded-full bg-green-500 flex-shrink-0 ${
                              message.sender === senderId ? "" : "mr-3"
                            }`}
                          >
                            {message.sender.charAt(0)}
                          </div>
                          <div
                            className={`relative text-sm bg-white py-2 px-4 shadow rounded-xl ${
                              message.sender === senderId ? "ml-3" : ""
                            }`}
                          >
                            <div>{message.text}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No messages yet.</p>
                )}
              </div>
            </div>
            {/* Message input */}
            <div className="flex flex-row items-center w-full h-16 px-4 bg-white rounded-xl">
              {/* Input field */}
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full h-10 pl-4 border rounded-xl focus:outline-none focus:border-green-300"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)} // Update newMessage state as the input value changes
                  />
                </div>
              </div>
              {/* Send button */}
              <div className="ml-4">
                <button className="flex items-center justify-center flex-shrink-0 px-4 py-1 font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl" onClick={sendMessage}>
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 -mt-px transform rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
