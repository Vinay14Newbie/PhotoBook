import { z } from 'zod';

export const zodSignupSchema = z.object({
  username: z
    .string({ message: 'Username should be bigger than 3 characters' })
    .min(3),
  email: z.string({ message: 'Give proper email address' }).email(),
  password: z
    .string({ password: 'Password should have atleast 3 characters' })
    .min(3)
});
