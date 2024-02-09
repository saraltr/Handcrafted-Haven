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
            case 'POST':
                const { name, description, pricing, image, seller, reviews, category, material, sizes } = req.body.sellerData;
                if (!name) {
                    return res.status(400).json({ error: 'Name is required' });
                } if (!description) {
                    return res.status(400).json({ error: 'Description is required' });
                } if (!pricing) {
                    return res.status(400).json({ error: 'Pricing is required' });
                } if (!image) {
                    return res.status(400).json({ error: 'Image is required' });
                } if (!seller) {
                     return res.status(400).json({ error: 'Seller is required' });
                } if (!reviews) {
                    return res.status(400).json({ error: 'Reviews is required' });
                } if (!category) {
                    return res.status(400).json({ error: 'Category is required' });
                } if (!material) {
                    return res.status(400).json({ error: 'Materials is required' });
                } if (!sizes) {
                    return res.status(400).json({ error: 'Sizes is required' });
                }

                const createdProduct = await prisma.product.create({
                    data: {
                        name: name,
                        description: description,
                        pricing: pricing,
                        image: image,
                        seller: seller,
                        reviews: reviews,
                        category: category,
                        material: material,
                        sizes: sizes 
                    }
                });
                res.status(200).json(createdProduct);
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    } finally {
        await prisma.$disconnect();
    }
}
