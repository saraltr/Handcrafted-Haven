import NextAuth, { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github"
import prisma from "@/lib/prisma";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if(!githubId || !githubSecret){
    throw new Error('Missing Github id or Github secret')
}

export const authConfig = {
    providers: [GithubProvider({
        clientId: githubId as string,
        clientSecret: githubSecret as string
    }),
    ],
    callbacks: {
        // session: async ({session, user}) => {
        //     // console.log(session, user)
        //     return session;
        // },
        async redirect({ url, baseUrl }) {
            // allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`
            // allows callback URLs on the same origin
            else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    },
    adapter: PrismaAdapter(prisma) as Adapter
} satisfies NextAuthOptions;

export default NextAuth(authConfig);