import React, { useState } from "react";
import { TESelect } from "tw-elements-react";
import Msg from "./Msg";
export default function Message() {
  const data = [
    { text: "new", value: 1 },
    { text: "old", value: 2 },
  ];

  let [messageType, setMessageType] = useState(false);
  let [outgoingMessages, setOutgoingMessages] = useState(true);

  return (
    <>
      <div className="container mx-auto min-h-screen">
        <h1 className="mt-5 ml-10">Message</h1>

        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-10 ml-10">
          <h3 className=" ml-5">Message type</h3>
          <input
            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            checked={messageType} // BEGIN: Add checked prop
            id="checkboxDefault"
            onChange={(e) => setMessageType(e.target.checked)}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxDefault"
          >
            Messages sent
          </label>
        </div>

        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] ml-10">
          <input
            className="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
            type="checkbox"
            checked={outgoingMessages} // BEGIN: Add checked prop
            id="checkboxChecked"
            onChange={(e) => setOutgoingMessages(e.target.checked)}
          />

          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="checkboxChecked"
          >
            Outgoing messages
          </label>
        </div>

        <Msg />

        <div className="flex justify-end">
          <div className="relative z-[2] rounded-r border-2 border-primary px-4 py-1 font-medium uppercase bg-green-500 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 mr-10">
            <TESelect data={data} visibleOptions={2} />
          </div>
        </div>
      </div>
    </>
  );
}
