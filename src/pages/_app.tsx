import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from '@vercel/analytics/react';
import { api } from "~/utils/api";

import "~/styles/globals.css";

/* 
   The following code defines a constant function called MyApp 
   that takes a parameter of type AppType which requires an object 
   with a key called "session" of type Session|null. The function 
   destructures the props object to retrieve the "Component", 
   "session", and "pageProps" values.


   Inside the function, it returns a JSX element which wraps the 
   "Component" with a "SessionProvider" component that takes 
   "session" value as a prop.


   Lastly, it includes an "Analytics" component which wraps the 
   "Component" and is rendered alongside it. 
*/

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
