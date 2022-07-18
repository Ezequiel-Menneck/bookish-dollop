import { Request, Response, NextFunction } from "express";

export const handleGetBook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send({
    success: true,
    message: "Calendar",
  });
};
