import { NextFunction, Request, Response } from 'express';

export const index = (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.json({ message: 'ok' });
  } catch (error) {
    next(error);
  }
};
