import { getServerSession } from "next-auth";
import { authConfig } from "../pages/api/auth/[...nextauth]";

export const checkSession = async () => {
    try {
        const session = await getServerSession(authConfig);

        if (session) {
            // user is logged in
            return true;
        } else {
            // user is not logged in
            return false;
        }
    } catch (error) {
        console.error("Error checking session:", error);
        return false;
    }
};