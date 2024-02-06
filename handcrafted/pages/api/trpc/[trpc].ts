import * as trpcNext from "@trpc/server/adapters/next"

import { serverRouter } from "../../../server/router";
import { createContext } from "../../../server/context";

// create a Next.js API handler using trpc's utility function
export default trpcNext.createNextApiHandler({
    // provide the router for handling incoming requests
  router: serverRouter,
  // provide the context for creating the trpc context
  createContext,
});