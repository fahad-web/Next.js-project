// pages/api/admin/update.js
import { getSession } from 'next-auth/react';
import { updateAdminInfo } from '../admin'; // Import your admin service

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { email: sessionEmail } = session.user;
  const {  email, password } = req.body;

  const updatedAdmin = await updateAdminInfo({ email, password }, sessionEmail);

  // Update the session email
  session.user.email = updatedAdmin.email;

  return res.status(201).json({ message: 'Admin info updated successfully' });
}
