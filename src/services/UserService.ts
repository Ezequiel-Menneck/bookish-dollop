import { Request, Response, NextFunction } from "express";
import { v4 as uuidV4 } from "uuid";

type user = {
  name: string;
  age: number;
  id: string;
};

let users: user[] = [
  {
    name: "Rbson",
    age: 10,
    id: uuidV4(),
  },
  {
    name: "Isa",
    age: 10,
    id: uuidV4(),
  },
  {
    name: "Isa",
    age: 10,
    id: uuidV4(),
  },
];

export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(users);
};

export const getUserById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId: string = req.params.id;

  const user = users.find((user) => {
    return user.id === userId;
  });

  res.send(user);
};

export const addUser = (req: Request, res: Response, next: NextFunction) => {
  const { name, age } = req.body;

  users.push({
    name,
    age,
    id: uuidV4(),
  });

  res.json(users);
};

export const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const userId: string = req.params.id;

  users = users.filter((user) => {
    return user.id !== userId;
  });

  res.json(users);
};
