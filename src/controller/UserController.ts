import { Request, Response } from 'express';
import prismaClient from '../database/prismaCliente';
import descryptPassword from '../utils/descrypt';
import encryptPassword from '../utils/encrypt';

type User = {
  name: string;
  email: string;
  password: string;
  activeAccount: boolean;
};

export const addUser = async (req: Request, res: Response) => {
  const { name, email, password, activeAccount }: User = req.body;
  const ecryptedPass = await encryptPassword(password);

  const newUser = await prismaClient.user.create({
    data: {
      name,
      email,
      password: ecryptedPass,
      activeAccount,
    },
  });

  res.status(201).json(newUser);
};

export const findUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  const findedUser = await prismaClient.user.findUnique({
    where: { email },
  });

  res.status(200).json(findedUser);
};

export const authUser = async (req: Request, res: Response) => {
  const { password, email } = req.body;

  const user = await prismaClient.user.findUnique({
    where: { email },
  });

  if (!user)
    return res.status(401).json({ message: 'Usuário ou senha incorreta' });
  if (!user?.activeAccount)
    return res.status(401).json({ message: 'Usuário desativado' });

  const validatePassword = await descryptPassword(password, user?.password);

  if (!validatePassword) {
    return res.status(401).json({ message: 'Senha incorreta' });
  }

  // const token = await generateToken(user);

  return res.status(200).json({
    message: 'Usuário autenticado',
    user,
    // token,
  });
};
