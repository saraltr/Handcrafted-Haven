import { authConfig } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { LogoutButton } from "./logoutButton";


export const User = async () => {
    const session = await getServerSession(authConfig)

    if(!session?.user) {
        return null;
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <img src={session.user.image} alt="user avatar" />
        <div className="card-body">
            <h2 className="card-title">{session.user.name}</h2>
            <p>{session.user.email}</p>
            <div className="card-actions justify-end">
            <LogoutButton></LogoutButton>
            </div>
        </div>
        </div>
    )
}