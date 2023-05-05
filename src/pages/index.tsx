/* This is a TypeScript React code that imports necessary modules from the Next.js framework and other
libraries. It defines a functional component called `Home` that renders a webpage with links to the
author's social media profiles and a message that is fetched from an API using tRPC. It also defines
another functional component called `AuthShowcase` that displays the user's authentication status
and a secret message if the user is logged in. */

import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from Mehran" });
  return (
    <>
<Head>
  
  <title>theApp</title>
  <meta name="description" content="theApp" />
  <link rel="icon" href="/favicon.ico" />
</Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#00fbde] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            the<span className="text-[hsl(167,60%,20%)]">App</span>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://twitter.com/themehrankhan"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[hsl(167,60%,20%)]">Twitter →</h3>
              <div className="text-lg">
              Check out my twitter, i do shitpost there quite alot so, be updated about me.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://instagram.com/themehrankhan"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[hsl(167,60%,20%)]">Instagram →</h3>
              <div className="text-lg">
              Check out my sweet coding adventures, it&apos;s filled with cool coding stuff that you&apos;ll never find anywhere else.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://github.com/themehrankhan"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[hsl(167,60%,20%)]">Github →</h3>
              <div className="text-lg">
              Check out my github, i do code there quite alot so, be updated about me.
              </div>
            </Link>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://discord.gg/Yd2wtwh7yv"
              target="_blank"
            >
              <h3 className="text-2xl font-bold text-[hsl(167,60%,20%)]">Discord →</h3>
              <div className="text-lg"> Show some love in discord server
              </div>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : "Loading tRPC query..."}
            </p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

/* `const AuthShowcase` is a functional component that displays the user's authentication status and a
secret message if the user is logged in. It uses the `useSession` hook from the `next-auth/react`
library to get the user's session data, and the `useQuery` hook from the `api` module to fetch the
secret message from the server using tRPC. The `secretMessage` query is only enabled if the user is
logged in, which is determined by checking if `sessionData?.user` is not undefined. The component
then renders a message that includes the user's name (if logged in) and the secret message (if
available), as well as a button to sign in or sign out depending on the user's authentication
status. */

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>,
  );
};
