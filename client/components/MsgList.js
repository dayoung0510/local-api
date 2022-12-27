import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import { useState } from "react";

const userIds = ["roy", "jay"];
const getRandomUserId = () => userIds[Math.round(Math.random())];

const originalMsgs = Array(50)
  .fill(0)
  .map((_, idx) => ({
    id: idx + 1,
    userId: getRandomUserId(),
    timeStamp: 1234567890123 + idx * 1000 * 60,
    text: `${idx + 1} mock text`,
  }))
  .reverse();

const MsgList = () => {
  const [msgs, setMsgs] = useState(originalMsgs);

  const onCreate = (text) => {
    const newMsg = {
      id: msgs.length + 1,
      userId: getRandomUserId(),
      timeStamp: Date.now(),
      text: `${msgs.length + 1} ${text}`,
    };
    setMsgs((msgs) => [newMsg, ...msgs]);
    msgs.unshift(newMsg);
  };

  return (
    <>
      <MsgInput mutate={onCreate} />
      <ul className="messages">
        {msgs.map((x) => (
          <MsgItem key={x.id} {...x} />
        ))}
      </ul>
    </>
  );
};

export default MsgList;
