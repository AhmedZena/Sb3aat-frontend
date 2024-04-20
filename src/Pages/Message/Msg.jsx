import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ConversationsList = () => {
  const [conversations, setConversations] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [userIdAvailable, setUserIdAvailable] = useState(false);

  useEffect(() => {
    if (user._id) {
      setUserIdAvailable(true);
    }
  }, [user._id]);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        if (userIdAvailable) {
          const response = await axios.get(
            `https://sb3aat.onrender.com/api/conversations/${user._id}`
          );
          // Filter out conversations where the user is a member
          const filteredConversations = response.data.filter((conversation) =>
            conversation.members.includes(user._id) && conversation.messages.length > 0
          );
          setConversations(filteredConversations);
          console.log(filteredConversations);
        }
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [userIdAvailable, user._id]);

  return (
    <div className="container mx-auto mb-20">
      <h2 className="my-5 mb-10 text-3xl font-bold text-center">Conversations</h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {conversations.map((conversation) => (
          <li
            key={conversation._id}
            className="p-6 border rounded-lg shadow-md"
          >
            <ConversationItem conversation={conversation} user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const ConversationItem = ({ conversation, user }) => {
  const [otherMemberData, setOtherMemberData] = useState(null);

  useEffect(() => {
    const fetchOtherMemberData = async () => {
      try {
        // Find the member ID that is not the current user's ID
        const otherMemberId = conversation.members.find(
          (memberId) => memberId !== user._id
        );
        const response = await axios.get(
          `https://sb3aat.onrender.com/api/auth/getUserById/${otherMemberId}`
        );
        setOtherMemberData(response.data);
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    };

    fetchOtherMemberData();
  }, [conversation.members, user._id]);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      {otherMemberData ? (
        <>
          <div className="mb-4">
            <img
              src={otherMemberData.profilePhoto.url}
              alt="Profile"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div>
            <h4 className="mb-3 text-xl font-semibold">
              {otherMemberData.username}
            </h4>
            <Link
              to={`/message/${otherMemberData._id}`}
              className="block text-blue-500 hover:text-green-700"
            >
              <button className="px-4 py-2 font-bold text-green-500 border-2 border-green-500 rounded hover:bg-green-500 hover:text-white">
                Chat with Me
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default ConversationsList;
