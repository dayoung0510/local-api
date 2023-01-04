import MsgList from "../components/MsgList";
import { fetcher } from "../queryClient";

const Home = ({ smsgs, users }) => (
  <>
    <h1>simple SNS</h1>
    {smsgs && users && <MsgList smsgs={smsgs} users={users} />}
  </>
);

export const getServerSideProps = async () => {
  const smsgs = await fetcher(GET_MESSAGES);
  const users = await fetcher(GET_USERS);

  return {
    props: { smsgs, users },
  };
};

export default Home;
