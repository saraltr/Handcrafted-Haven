import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { userId, userStory } = req.body;

      const addedStory = await prisma.user.upsert({
        // where: { name: userId },
        // data: { story: userStory }
        create: { story: userStory },
        update: { story: userStory },
        where: { email: userId}
      });

      res.status(200).json({ message: 'User story added successfully', addedStory });
    } catch (error) {

      console.error('Error adding user story:', error);
      res.status(500).json({ message: 'Error adding user story' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}