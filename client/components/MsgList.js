import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import fetcher from "../fetcher";

const MsgList = () => {
  const [msgs, setMsgs] = useState();
  const [editingId, setEditingId] = useState(null);
  const { query } = useRouter();

  const userId = query.userId || query.userid || "";

  const onCreate = async (text) => {
    const newMsg = await fetcher("post", "/messages", { text, userId });
    if (!newMsg) throw Error("something wrong");
    setMsgs((msgs) => [newMsg, ...msgs]);
    msgs.unshift(newMsg);
  };

  const onUpdate = async (text, id) => {
    const newMsg = await fetcher("put", `/messages/${id}`, { text, userId });
    if (!newMsg) throw Error("something wrong");
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === id);
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1, newMsg);
      return newMsgs;
    });
    doneEdit();
  };

  const doneEdit = () => setEditingId(null);

  const onDelete = async (id) => {
    const receivedId = await fetcher("delete", `/messages/${id}`, {
      params: { userId },
    });
    setMsgs((msgs) => {
      const targetIndex = msgs.findIndex((msg) => msg.id === receivedId + "");
      if (targetIndex < 0) return msgs;
      const newMsgs = [...msgs];
      newMsgs.splice(targetIndex, 1);
      return newMsgs;
    });
  };

  const getMessages = async () => {
    const msgs = await fetcher("get", "/messages");
    setMsgs(msgs);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">
        {msgs &&
          msgs.map((x) => (
            <MsgItem
              key={x.id}
              {...x}
              onUpdate={onUpdate}
              startEdit={() => setEditingId(x.id)}
              onDelete={() => onDelete(x.id)}
              isEditing={editingId === x.id}
              myId={userId}
            />
          ))}
      </ul>
    </>
  );
};

export default MsgList;
