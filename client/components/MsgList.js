import MsgItem from "./MsgItem";
import MsgInput from "./MsgInput";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import {
  fetcher,
  QueryKeys,
  findTargetMsgIndex,
  getNewMessages,
} from "../queryClient";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import {
  CREATE_MESSAGE,
  GET_MESSAGES,
  UPDATE_MESSAGE,
  DELETE_MESSAGE,
} from "../graphql/message";

const MsgList = ({ smsgs }) => {
  const client = useQueryClient();
  const [msgs, setMsgs] = useState([{ messages: smsgs }]);
  const [editingId, setEditingId] = useState(null);
  const { query } = useRouter();
  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

  const userId = query.userId || query.userid || "";

  const { mutate: onCreate } = useMutation(
    ({ text }) => fetcher(CREATE_MESSAGE, { text, userId }),
    {
      onSuccess: ({ createMessage }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          return {
            pageParam: old.pageParam,
            pages: [
              { messages: [createMessage, ...old.pages[0].messages] },
              ...old.pages.slice(1),
            ],
          };
        });
      },
    }
  );

  const { mutate: onUpdate } = useMutation(
    ({ text, id }) => fetcher(UPDATE_MESSAGE, { text, id, userId }),
    {
      onSuccess: ({ updateMessage }) => {
        doneEdit();
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            updateMessage.id
          );
          if (pageIndex < 0 || msgIndex < 0) return old;
          const newMsgs = getNewMessages(old);
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1, updateMessage);
          return newMsgs;
        });
      },
    }
  );

  const { mutate: onDelete } = useMutation(
    (id) => fetcher(DELETE_MESSAGE, { id, userId }),
    {
      onSuccess: ({ deleteMessage: deletedId }) => {
        client.setQueryData(QueryKeys.MESSAGES, (old) => {
          const { pageIndex, msgIndex } = findTargetMsgIndex(
            old.pages,
            deletedId
          );
          if (pageIndex < 0 || msgIndex < 0) return old;
          const newMsgs = getNewMessages(old);
          newMsgs.pages[pageIndex].messages.splice(msgIndex, 1);
          return newMsgs;
        });
      },
    }
  );

  const doneEdit = () => setEditingId(null);

  const { data, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    QueryKeys.MESSAGES,
    ({ pageParam = "" }) => fetcher(GET_MESSAGES, { cursor: pageParam }),
    {
      getNextPageParam: ({ messages }) => {
        return messages?.[messages.length - 1]?.id;
      },
    }
  );

  useEffect(() => {
    if (!data?.pages) return;
    setMsgs(data.pages);
  }, [data?.pages]);

  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);

  if (isError) return null;

  return (
    <>
      {userId && <MsgInput mutate={onCreate} />}
      <ul className="messages">
        {msgs &&
          msgs.map(({ messages }) =>
            messages.map((x) => (
              <MsgItem
                key={x.id}
                {...x}
                onUpdate={onUpdate}
                startEdit={() => setEditingId(x.id)}
                onDelete={() => onDelete(x.id)}
                isEditing={editingId === x.id}
                myId={userId}
              />
            ))
          )}
      </ul>
      <div ref={fetchMoreEl} />
    </>
  );
};

export default MsgList;
