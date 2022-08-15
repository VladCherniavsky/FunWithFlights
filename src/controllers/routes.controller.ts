import { NextFunction, Request, Response } from 'express';
import axios from 'axios';

const providers = [
  'https://id4wvxpg1h.execute-api.us-east-1.amazonaws.com/dev/api/provider?provider=flight1',
  'https://id4wvxpg1h.execute-api.us-east-1.amazonaws.com/dev/api/provider?provider=flight2',
];

export const getRoutes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const promises = providers.map(provider => axios.get(provider));
    const responses = await Promise.all(promises);
    const dataSet = responses.map(response => response.data);
    const result = dataSet.reduce((acc, item) => {
      return acc.concat(item);
    }, []);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
