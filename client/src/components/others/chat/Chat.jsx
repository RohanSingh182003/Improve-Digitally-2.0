import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import ChatContainer from "./ChatContainer";

const Chat = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="sticky bottom-6 flex justify-end px-4 overflow-hidden">
      <div className="relative">
      {toggle && <ChatContainer setToggle={setToggle} />}
      <div
        onClick={() => setToggle((initial) => !initial)}
        className={`${!toggle && 'p-2'} bg-orange-500 text-white rounded-full w-fit cursor-pointer`}
      >
        {!toggle && <BiMessageDetail className="text-4xl" />}
      </div>
      </div>
    </div>
  );
};

export default Chat;
