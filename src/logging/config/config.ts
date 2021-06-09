/** Import file dependencies */
import Log from '../models/log.model';

const getTimeStamp = (): string => {
  return new Date().toISOString();
};

const log = (namespace: string, message: string, method: string, object?: any) => {
  const logString = `[${getTimeStamp()}] [${method.toUpperCase()}] [${namespace}] ${message}`;
  object = object || '';

  new Log({
    time: getTimeStamp(),
    message,
    method: method.toUpperCase(),
    namespace,
    object,
  }).save();

  switch (method.toUpperCase()) {
    case 'WARN':
      console.warn(logString, object);
    case 'ERROR':
      console.error(logString, object);
    case 'DEBUG':
      console.debug(logString, object);
    case 'INFO':
      console.log(logString, object);
  }
};

const info = (namespace: string, message: string, object?: any) => {
  log(namespace, message, 'info', object);
};

const warn = (namespace: string, message: string, object?: any) => {
  log(namespace, message, 'warn', object);
};

const error = (namespace: string, message: string, object?: any) => {
  log(namespace, message, 'error', object);
};

const debug = (namespace: string, message: string, object?: any) => {
  log(namespace, message, 'debug', object);
};

export default {
  info,
  warn,
  error,
  debug,
};
