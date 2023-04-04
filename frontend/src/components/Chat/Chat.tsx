import { Button } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <div>
      {" "}
      chat
      <Button onClick={() => signOut()}>Log Out</Button>
    </div>
  );
};

export default Chat;
