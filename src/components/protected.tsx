import { useSession } from "next-auth/client";
import React from "react";

export const Protected: React.FC = () => {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <>
          <h1> You are not allowed to see this </h1>
        </>
      )}
      {session && (
        <>
          <h1>Super secret content</h1>
          <p>
            Other people dont know this secret because they arent allowed to
            login.
          </p>
        </>
      )}
    </>
  );
};
