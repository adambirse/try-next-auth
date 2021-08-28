import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

export const Navigation: React.FC = () => {
  const [session] = useSession();

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/protected">
              <a>Protected resource</a>
            </Link>
          </li>
        </ul>
      </nav>
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
