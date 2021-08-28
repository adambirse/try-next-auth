import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
import React from "react";

export const Navigation: React.FC = () => {
  const [session] = useSession();

  return (
    <>
      <nav>
        <p>
          Navigation links currently causing signout, navigate with browser
          instead.
        </p>
        <ul>
          <li>
            <Link href="/">
              <a>Home / </a>
            </Link>
          </li>
          <li>
            <Link href="/protected">
              <a>Protected resource /protected</a>
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
