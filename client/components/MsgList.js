import MsgItem from "./MsgItem";

const userIds = ["roy", "jay"];
const getRandomUserId = () => userIds[Math.round(Math.random())];

const msgs = Array(50)
  .fill(0)
  .map((_, idx) => ({
    id: idx + 1,
    userId: getRandomUserId(),
    timeStamp: 1234567890123 + idx * 1000 * 60,
    text: `${idx + 1} mock text`,
  }))
  .reverse();

const MsgList = () => {
  return (
    <ul className="messages">
      {msgs.map((x) => (
        <MsgItem key={x.id} {...x} />
      ))}
    </ul>
  );
};

export default MsgList;
