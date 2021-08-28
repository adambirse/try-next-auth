import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

export const SignIn: React.FC = () => {
  const [session] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button
            onClick={(e) => {
              e.preventDefault(), signIn();
            }}
          >
            Sign in
          </button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button
            onClick={(e) => {
              e.preventDefault, signOut();
            }}
          >
            Sign out
          </button>
        </>
      )}
    </>
  );
};
