import { FiSend } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const ChatContainer = ({setToggle}) => {
    return (
      <div className="mb-6 w-full h-[80vh] md:w-64 md:h-[28rem] border rounded-lg overflow-hidden flex flex-col shadow-xl">
        {/* chat heading */}
        <div className="w-full h-14 flex justify-between items-center bg-orange-500 text-white px-6">
          <p>Improve Digitally</p>
          <RxCross2 onClick={() => setToggle((initial) => !initial)} className="text-xl border rounded-full cursor-pointer" />
        </div>
        {/* messages container */}
        <div className="h-full backdrop-blur-xl bg-white/30 border-b p-2 overflow-y-scroll">
          {/* message */}
          <div className="chat chat-start">
            <div className="chat-bubble bg-gray-300 text-gray-700">
              Hi, how can I help you?
            </div>
          </div>
        </div>
        {/* sent message  */}
        <div className="w-full flex items-center bg-white py-1">
          <input
            type="text"
            placeholder="enter message..."
            className="p-2 w-5/6 focus:outline-none"
          />
          <FiSend className="text-2xl text-gray-500 w-1/6 cursor-pointer" />
        </div>
      </div>
    );
  };

export default ChatContainer;