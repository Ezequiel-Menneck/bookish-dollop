import { Request, Response } from 'express';
import { v4 as uuidV4 } from 'uuid';

type User = {
  name: string;
  age: number;
  id: string;
};

let users: User[] = [
  {
    name: 'Rbson',
    age: 10,
    id: uuidV4(),
  },
  {
    name: 'Isa',
    age: 10,
    id: uuidV4(),
  },
  {
    name: 'Isa',
    age: 10,
    id: uuidV4(),
  },
];

export const getAllUsers = (req: Request, res: Response) => {
  res.json(users);
};

export const getUserById = (req: Request, res: Response) => {
  const userId: string = req.params.id;

  const selectedUser = users.find(user => user.id === userId);

  res.send(selectedUser);
};

export const addUser = (req: Request, res: Response) => {
  const { name, age } = req.body;

  users.push({
    name,
    age,
    id: uuidV4(),
  });

  res.json(users);
};

export const deleteUser = (req: Request, res: Response) => {
  const userId: string = req.params.id;

  users = users.filter(user => user.id !== userId);

  res.json(users);
};

export const updateUser = (req: Request, res: Response) => {
  const userId: string = req.params.id;
  const { name, age } = req.body;

  users = users.map(user => {
    if (user.id === userId) {
      return {
        name,
        age,
        id: user.id,
      };
    }

    return user;
  });

  res.json(users);
};
