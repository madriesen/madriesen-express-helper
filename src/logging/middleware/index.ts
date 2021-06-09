/** import file dependencies */
import { Request, Response, NextFunction } from 'express';
import logging from '../config/config';

const NAMESPACE = 'Router';

const requestLog = (req: Request, res: Response, next: NextFunction) => {
  logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);
  next();
};

export default {
  requestLog,
};
