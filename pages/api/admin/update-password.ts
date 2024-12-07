import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import bcrypt from 'bcrypt';
import { connectToDatabase } from '../../../utils/mongodb';
import User from '../../../models/User'; // Adjust path to your user model

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access forbidden' });
  }

  if (req.method === 'PUT') {
    const { userId, newPassword } = req.body;

    if (!userId || !newPassword) {
      return res.status(400).json({ message: 'User ID and new password are required' });
    }

    try {
      await connectToDatabase();
      
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Update the password in the database
      const result = await User.updateOne({ _id: userId }, { password: hashedPassword });

      if (result.modifiedCount > 0) {
        res.status(200).json({ message: 'Password updated successfully' });
      } else {
        res.status(404).json({ message: 'User not found or no changes made' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
