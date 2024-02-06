// context is used to pass contextual data to all router resolvers. In this case the context we pass is the prisma instance

import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { PrismaClient } from "@prisma/client"

// create context for trpc with optional options
export async function createContext(opts?: trpcNext.CreateNextContextOptions) {

  const prisma = new PrismaClient()

  return { prisma }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>