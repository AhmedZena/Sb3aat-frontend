import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const { id } = useParams();

  const senderId = user ? user._id : null;

  const fetchMessages = async () => {
    try {
      if (user) {
        const requestData = {
          sender: senderId,
          receiver: id,
        };
        const response = await axios.post(
          "https://sb3aat.onrender.com/api/conversations/messages",
          requestData
        );
        setMessages(response.data.messages.slice(1)); // Exclude the first message
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    const interval = setInterval(fetchMessages, 1000);
    return () => clearInterval(interval);
  }, [user, id, senderId]);

  const sendMessage = async () => {
    try {
      if (newMessage.trim() !== "") {
        const requestData = {
          sender: senderId,
          receiver: id,
          text: newMessage,
        };

        await axios.post(
          "https://sb3aat.onrender.com/api/conversations/message/",
          requestData
        );
        setNewMessage(""); // Clear the input field
        fetchMessages(); // Fetch the updated messages
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen bg-gray-100">
      <div className="w-[150px] h-full bg-gray-200">
        <div className="p-4">
          <Link
            to={`/messages/${senderId}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Back to Conversations
          </Link>
        </div>
      </div>
      <div className="container flex flex-col w-3/4 h-full mx-auto bg-gray-100">
        <div className="flex-1 p-4 overflow-y-auto">
          {loading ? (
            <p>Loading messages...</p>
          ) : messages.length > 0 ? (
            <div className="space-y-4">
              {messages
                .filter(
                  (message) => message && message.text && message.text.trim() !== ""
                )
                .map((message, index) => (
                  <div
                    key={index}
                    className={`flex mb-2 ${message.sender === senderId ? "justify-end text-green-600 font-bold " : "justify-start"
                    }`}
                  >
                    <div className="p-2 bg-white rounded-md shadow-md">
                      <p>{message.text}</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p>No messages yet.</p>
          )}
        </div>
        <div className="p-4 bg-white">
          <div className="flex">
            <input
              type="text"
              className="flex-1 p-2 border rounded-md focus:outline-none"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button
              className="px-4 py-2 ml-2 font-bold text-white bg-green-500 rounded-md hover:scale-110"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
