const MsgItem = ({ id, timestamp, text }) => {
  return (
    <li className="messages__item">
      <h3>
        {id}
        <sub>
          {new Date(timestamp).toLocaleString("ko-KR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </sub>
      </h3>

      {text}
    </li>
  );
};

export default MsgItem;
