import requestLog from './middleware/index';
import log from './config/config';

const middleware = requestLog.requestLog;

const Logging = {
  log,
  requestLog: middleware,
};

export { Logging };
