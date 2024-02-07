import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const productId = req.query.productId as string;
    const { reviewData } = req.body;

    try {
      const updatedProduct = await prisma.product.update({
        where: { id: productId },
        data: {
          reviews: {
            push: reviewData,
          },
        }
      });
      res.status(200).json(updatedProduct);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}