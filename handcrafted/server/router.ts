import { initTRPC } from '@trpc/server';
import { Context } from "./context";

const t = initTRPC.context<Context>().create();

// base router and procedure helpers
const router = t.router;
const publicProcedure = t.procedure; 

export const serverRouter = router({
    findAllProducts: publicProcedure.query(({ ctx }) => {
      return ctx.prisma.product.findMany();
    })
})

export type ServerRouter = typeof serverRouter;