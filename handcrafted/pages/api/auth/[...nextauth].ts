import NextAuth, { NextAuthOptions } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github"
import prisma from "@/lib/prisma";
import Auth0Provider from "next-auth/providers/auth0";

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if(!githubId || !githubSecret){
    throw new Error('Missing Github id or Github secret')
}

export const authConfig = {
    providers: [Auth0Provider({
        clientId: process.env.AUTH0_CLIENT_ID as string,
        clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
        issuer: process.env.AUTH0_ISSUER_BASE_URL
    }),
        GithubProvider({
        clientId: githubId as string,
        clientSecret: githubSecret as string
    }), 
    ],
    callbacks: {
        // working on more user session info 
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