import { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";

const Home: NextPage = () => {
  const { data } = useSession();

  console.log(data);
  return (
    <>
      {data?.user ? (
        <button onClick={() => signOut()}>sign Out</button>
      ) : (
        <button onClick={() => signIn("google")}>sign In</button>
      )}
    </>
  );
};

export default Home;
