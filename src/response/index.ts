/** Import file dependencies */
import { Response } from 'express';

/**
 * Response Module
 *
 * Send
 *  - success: add json success true
 *  - error: add json success false
 */
const response = {
  send: {
    success: (res: Response, status: number, data?: any) => {
      res.status(status).json({ success: true, data });
    },
    error: (res: Response, status: number, error: object) => {
      res.status(status).json({ success: false, error });
    },
  },
};

export default response;
