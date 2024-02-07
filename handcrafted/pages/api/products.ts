import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    try {
        switch (req.method) {
            case 'GET':
                const products = await prisma.product.findMany();
                res.status(200).json(products);
                break;
            case 'PUT':
                const { id, reviewData } = req.body;
                const updatedProduct = await prisma.product.update({
                    where: { id },
                    data: {
                        reviews: {
                            push: reviewData,
                        },
                    },
                });
                res.status(200).json(updatedProduct);
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}
