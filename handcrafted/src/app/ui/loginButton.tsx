"use client"

import { signIn } from "next-auth/react"

export const LoginButton = () => {
    return(
        <button onClick={
            async () => {
                await signIn(undefined, { callbackUrl: '/profile' })
            }
        }>Login with Github</button>
    )
}