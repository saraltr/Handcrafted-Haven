import { SessionProvider } from "next-auth/react";
import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import { createTRPCNext } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import { ServerRouter } from "../../server/router";

function getBaseUrl() {
  if (typeof window === 'undefined') {
    return process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : `http://localhost:3000/api/trpc`
  }
  return '/api/trpc'
}

const { withTRPC } = createTRPCNext<ServerRouter>({
  config({ ctx }) {
    const links = [
      httpBatchLink({
        url: getBaseUrl(),
      }),
    ];
    return { links };
  },
  ssr: true,
});

// combine the withTRPC and App components
export default withTRPC(function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps): ReactElement {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
});
