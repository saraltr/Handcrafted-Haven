import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    try{
        if (req.method === 'GET') {
            const products = await prisma.product.findMany();
            // console.log(products);
            res.status(200).json(products);
        } else {
            res.status(405).json({ message: 'Method Not Allowed' });
        }
    } finally {
    await prisma.$disconnect();
  }
}