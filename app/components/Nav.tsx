"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  return (
    <div>
      <h1>Styled</h1>
      <ul>
        <li>Products</li>
        {!user && (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image as string}
              alt="user"
              width={50}
              height={50}
            />
          </li>
        )}
      </ul>
    </div>
  );
}
