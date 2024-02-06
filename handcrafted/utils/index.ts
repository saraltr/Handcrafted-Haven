import { getServerSession } from "next-auth";
import { authConfig } from "../pages/api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";

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

// export async function getProducts() {
//   const prisma = new PrismaClient()
//   try {
//     const products = await prisma.product.findMany();
//     console.log(products);
//     return {
//       props: { products }
//     };
//   } finally {
//     await prisma.$disconnect();
//   }
// }