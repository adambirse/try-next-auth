import Link from "next/link";
import React from "react";

export const Navigation: React.FC = () => {
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
    </>
  );
};
