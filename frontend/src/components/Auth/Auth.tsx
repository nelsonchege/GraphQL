import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";

export interface IAuthProps {
  session?: Session;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = ({ session, reloadSession }) => {
  const [username, setUsername] = useState("");
  const onsubmit = async () => {
    try {
      // mutate a graphql endpoint
    } catch (err) {
      console.log("onSubmit error", err);
    }
  };
  return (
    <Center height={"100vh"} border={"1px solid red"}>
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize={"3xl"}>create a UserName</Text>
            <Input
              placeholder="Enter a UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button width={"100%"} onClick={onsubmit}>
              save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize={"3xl"}>MessengrQL</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={
                <Image
                  height={"20px"}
                  src="/images/googlelogo.png"
                  alt="Google logo"
                />
              }
            >
              Log In With Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};

export default Auth;
